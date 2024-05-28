import React, { useState } from "react";
import { Box, Stack, Typography, InputLabel ,Grid} from "@mui/material";
import CustomTextField from "../common/reusable/CustomTextField";
import FileUploadComponent from "../common/reusable/FileUploadComponent"; // Import your file upload component here
import TextArea from "../common/reusable/TextArea";

function SiteDetails({setFormOneData,formOneData}) {
  const [data, setData] = useState({
    siteName: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // if (name === "file") {
    //   setData((prevData) => ({
    //     ...prevData,
    //     [name]: files[0], // Assuming you only want to handle single file uploads
    //   }));
    // } else {
    //   setData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }));
    // }
    if (name === "file") {
      setFormOneData((prevData) => ({
        ...prevData,
        [name]: files[0], // Assuming you only want to handle single file uploads
      }));
    } else {
      setFormOneData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <Grid justifyContent="flex-start" alignItems="flex-start" sx={{width:"98%"}}>
      {/* <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Site Details
      </Typography> */}
      <form style={{ minWidth: "70%", maxWidth: "" }}>
        <Stack className="customStackMargin" marginLeft={0} spacing={1} >
          <>
            <div sx={{margin:"50px"}}>
            <CustomTextField
              id="siteName"
              name="siteName"
              label="Site Name"
              placeholder="Enter site name"
              handleChange={handleChange}
              value={data.siteName}
              width="100%"
              alignText="left"
            />
            </div>
          </>
          <>
    
          </>
          {/* Customized File upload component */}
          
          <TextArea  Placeholder={"Enter Description"} label={"Description"}  width="100" />
          
              <InputLabel sx={{textAlign:"left"}}>
                Max File Size is 500KB. Supported file types are jpg, .jpeg, .png and webp
              </InputLabel>
            
          <div 
            style={{
              border: "2px dotted grey",
              borderRadius: "5px",
              padding: "10px 0 50px 0px",
              textAlign: "center",
              flex:"true",
              flexDirection:"column",
              width:"100%"
            }}
          >
            <FileUploadComponent onChange={handleChange} />
          </div>
        </Stack>
      </form>
    </Grid>
  );
}

export default SiteDetails;