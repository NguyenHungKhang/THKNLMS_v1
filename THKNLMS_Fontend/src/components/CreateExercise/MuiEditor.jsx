import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";

const MuiEditor = () => {
    const save = (data) => {
        console.log(data);
    };
    const myTheme = createTheme({
        // Set up your custom MUI theme here
    });

    Object.assign(myTheme, {
        overrides: {
            MUIRichTextEditor: {
                editor: {
                    height: "150px",
                    minHeight: "167px",
                    overflow: "auto",
                    border: "1px solid #C6C6C6",
                    borderRadius: "10px",
                    paddingRight: "10px"
                },
                editorContainer: {
                    transform: "translate(10px,10px)"
                }
            }
        }
    })

    return (
        <div className="editorContainer">
            <ThemeProvider theme={myTheme}>
                <MUIRichTextEditor
                    label="Nội dung"
                    onSave={save}
                    inlineToolbar={true}
                />
            </ThemeProvider>
        </div>
    );
};

export default MuiEditor;