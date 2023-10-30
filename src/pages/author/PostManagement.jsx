import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const PostManagementByAuthor = () => {
    return (<>
        <h1>Post Manage by Author</h1>

        <h2>Using CKEditor&nbsp;5 build in React</h2>
        <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor&nbsp;5!</p>"
            config={{
                toolbar: ["undo", "redo", "bold", "italic", "blockQuote", "ckfinder", "imageTextAlternative",
                    "imageUpload", "heading", "imageStyle:full", "imageStyle:side", "link", "numberedList",
                    "bulletedList", "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells"]
            }}
            onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
                console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
                console.log('Focus.', editor);
            }}
        />
    </>)
}

export default PostManagementByAuthor