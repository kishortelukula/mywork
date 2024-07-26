import { useLocation } from "react-router-dom"
import FCRHeader from "../Commen_templates/FCR_Header";
import Fcr_Audit from "../Commen_templates/FCR_Audit";


export default function CreditReviewer(){
const location= useLocation();

const getUrlData=(query) =>{
    return new URLSearchParams(query)
}
const querData=getUrlData(location.search);
const reviewId=querData.get("reviewId");
console.log("Rid :",reviewId);
return(
    <>
     <FCRHeader reviewId={reviewId}/>
    <h2>It is Sr.CreditReviewer </h2>
    <h4>Review Id: {reviewId}</h4>
   
   <Fcr_Audit reviewId={reviewId} />
    </>

)

}