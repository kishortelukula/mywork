import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";


function TextEditor() {
    const editor = useRef(null);
      const [content, setContent] = useState("");
  
    return (
        <div>
       
  
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
  
        {/* <div>{HTMLReactParser(content)}</div> */}
      </div>
    );
}

export default TextEditor;
