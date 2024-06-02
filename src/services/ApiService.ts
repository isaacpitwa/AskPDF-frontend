import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export  class ApiService  {
  static async uploadPDF(file:File){
    try {
        let formData = new FormData();
        formData.append('file', file);

        const response =  await httpClient.post("/upload_pdf", formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error("An error occurred while uploading the PDF:", error);
        throw error;
    }
  }
  static async ask(question:string, pdf_id:number){
    try {
        const response =  await httpClient.post("/ask_question", {question, pdf_id},{
            headers: {
                "Content-type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("An error occurred while asking the question:", error);
        throw error;
    }
  }
}