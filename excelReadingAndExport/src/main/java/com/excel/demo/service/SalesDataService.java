package com.excel.demo.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.excel.demo.entity.SalesData;
import com.excel.demo.reposit.SalesDataReposit;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;

@Service
public class SalesDataService {

	@Autowired
	SalesDataReposit reposit;

	public void readAndStoreData(MultipartFile file) {
		List<List<String>> rowList = new ArrayList<>();
		try (Workbook workbook = WorkbookFactory.create(file.getInputStream())) {
			Sheet sheet = workbook.getSheetAt(1); // Assuming you are reading the first sheet (index 0)

			rowList = StreamSupport.stream(sheet.spliterator(), false).map(row -> StreamSupport
					.stream(row.spliterator(), false).map(this::getCellStringValue).collect(Collectors.toList()))
					.collect(Collectors.toList());

			System.out.println("Row is :" + rowList);

			List<SalesData> salesDataList = new ArrayList<>();

			rowList.forEach(r -> {
				if (r != null && !r.isEmpty()) {
					SalesData sData = new SalesData();
					try {
						sData.setOrderDate(r.get(0));
						sData.setRegion(r.get(1));
						sData.setManager(r.get(2));
						sData.setSalesMan(r.get(3));
						sData.setUnit(r.get(5));
						sData.setSaleAmount(r.get(7));
						sData.setUnitPrice(r.get(6));
						sData.setItem(r.get(4));

						salesDataList.add(sData);
					} catch (NumberFormatException | IndexOutOfBoundsException e) {
						System.err.println("Error processing row: " + r);
						e.printStackTrace();
					}
				} else {
					System.err.println("Invalid row encountered: " + r);
				}
			});

			// Save the sales data list to repository or perform further processing
			reposit.saveAll(salesDataList);

		} catch (EncryptedDocumentException | IOException e) {
			e.printStackTrace();
		}
	}

	private String getCellStringValue(Cell cell) {
		CellType cellType = cell.getCellType();

		if (cellType == CellType.STRING) {
			return cell.getStringCellValue();
		} else if (cellType == CellType.NUMERIC) {
			return String.valueOf(cell.getNumericCellValue());
		} else if (cellType == CellType.BOOLEAN) {
			return String.valueOf(cell.getBooleanCellValue());
		}

		return null;
	}

	public void getExcel(HttpServletResponse response) {

		List<SalesData> salesDatas = reposit.findAll();

		System.out.println("fine data from db : " + salesDatas);
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet("Sales Report");
		HSSFRow row = sheet.createRow(0);
		row.createCell(0).setCellValue("OrderDate");
		row.createCell(1).setCellValue("Region");
		row.createCell(2).setCellValue("Manager");
		row.createCell(3).setCellValue("SalesMan");
		row.createCell(4).setCellValue("Item");
		row.createCell(5).setCellValue("Units");
		row.createCell(6).setCellValue("Unit_price");
		row.createCell(7).setCellValue("Sale_amount");

		System.out.println("Created header: " + row.getCell(0).getStringCellValue());

		int rowStart = 1;

		for (SalesData salesData : salesDatas) {

			HSSFRow drow = sheet.createRow(rowStart);
			drow.createCell(0).setCellValue(salesData.getOrderDate());
			drow.createCell(1).setCellValue(salesData.getRegion());
			drow.createCell(2).setCellValue(salesData.getManager());
			drow.createCell(3).setCellValue(salesData.getSalesMan());
			drow.createCell(4).setCellValue(salesData.getItem());
			drow.createCell(5).setCellValue(salesData.getUnit());
			drow.createCell(6).setCellValue(salesData.getUnitPrice());
			drow.createCell(7).setCellValue(salesData.getSaleAmount());

			rowStart++;
			System.out.println("Adding data is: " + drow.getCell(5).getStringCellValue());

		}

		try {
			ServletOutputStream outputStream = response.getOutputStream();
			workbook.write(outputStream);
			workbook.close();
			outputStream.close();

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
