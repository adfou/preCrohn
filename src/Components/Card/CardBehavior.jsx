import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { InfoModal } from "../Modal/InfoModal"; // Assuming this is the modal component you are using
import { behaviorContent } from "../../Data";

export const CardBehavior = ({ title, subtitle, behaviors, data }) => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  // Filter behaviors based on the provided data
  console.log("somoking status :",data["Smoking Status"])
  const filteredBehaviors = behaviors.filter((behavior) => {
    if (behavior === "You’re eating enough fruit" && data["Fruit (servings/day)"] === 1) return false;
    if (behavior === "You’re eating enough fiber" && data["Fiber (grams/day)"] === 1) return false;
    if (behavior === "You don’t eat too much sucrose (sugar)" && data["Added sugar (grams/day)"] !== 1) return false;
    if (behavior === "You're physically active" && data["Physical activity (MET - hrs/wk)"] === 1) return false;
    if (behavior === "You don't smoke" && data["Smoking Status"] === 1.76) return false;
    return true;
  });

const handleOpenModal = (behavior) => {
  const content = { ...behaviorContent[behavior] }; // Clone content to modify if needed
  if (behavior.toLowerCase().includes("smoke") && data["Smoking Status"] === 1.3) {
    content.content += `<br><br>${behaviorContent[behavior].extra}`; // Append extra content
  }
  setModalContent(content);
  setOpen(true);
};
  const handleCloseModal = () => {
    setOpen(false);
    setModalContent({ title: "", content: "" });
  };

  return (
    <>
      <Paper
        className="behavor-card"
        elevation={3}
        sx={{
          paddingTop: "26px",
          paddingLeft: "33px",
          paddingRight: "53px",
          paddingBottom: "43px",
          borderRadius: 2,
          backgroundColor: "white",
          marginTop: "20px",
        }}
      >
        <Typography
          className="risk-card-title"
          variant="h6"
          sx={{ color: "#006494", marginBottom: 1, fontWeight: "700" }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "#00796B", marginBottom: 2 }}>
          {subtitle}
        </Typography>
        <Grid container direction="column" spacing={1} className="behavor">
          {filteredBehaviors.map((behavior, index) => (
            <Grid
              item
              key={index}
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{
                borderTop: "1px solid #597D0B",
                paddingBottom: 1,
              }}
            >
              <Grid item container alignItems="center" xs={10} sx={{flexWrap:"nowrap"}}>
                <Box
                  component="img"
                  src="/like.png"
                  alt="Checked Icon"
                  sx={{ width: 30, height: 30, marginRight: 1 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#00796B",
                    marginBottom: "0px !important",
                    marginLeft: "10px",
                  }}
                >
                  {behavior}
                </Typography>
              </Grid>
              <Grid item xs={2} container justifyContent="flex-end">
                <IconButton onClick={() => handleOpenModal(behavior)}>
                  <HelpOutlineIcon
                    sx={{ color: "#597D0B", width: 30, height: 30 }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Info Modal */}
      {open && (
        <InfoModal
          open={open}
          handleClose={handleCloseModal}
          title={modalContent.title}
          content={modalContent.content}
        />
      )}
    </>
  );
};
