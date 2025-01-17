import React from "react";
import { Stack, Typography, Grid2, IconButton, Box } from "@mui/material";
import OpenIcon from "@mui/icons-material/Launch";
import { colors } from "../../theme";

const BoardCard = () => {
  return (
    <Grid2 item xs={12} sm={3}>
      <Stack
        p={2}
        bgcolor="background.paper"
        borderLeft="5px solid"
        borderColor="white"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width="50%">
            <Typography
              textOverflow={"ellipsis"}
              overflow="hidden"
              whiteSpace="nowrap"
              fontWeight={400}
              variant="h6"
            >
              Board nameBoard name
            </Typography>
        </Box>
        <IconButton size="small">
            <OpenIcon />
        </IconButton>
        </Stack>
        <Typography variant="caption">Created at: 17/01/2025</Typography>
      </Stack>
    </Grid2>
  );
};

export default BoardCard;
