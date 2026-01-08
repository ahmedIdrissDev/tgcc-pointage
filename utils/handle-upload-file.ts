import React from 'react'

const Handleuploadfile =  async (file:any) => {
    try {
         const formData = new FormData();
       formData.append("file", file);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
       if (data.url) {
         return data.url
      }
      return ''
    } catch (error) {
        console.log(error)
    }
}

export default Handleuploadfile