import React from "react";
import { CardTest, Vc } from "./styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Naoadd() {
  return (
    <div>
      <CardTest>
        <Vc gutterBottom
              variant="h5"
              component="div"
              color={"primary"}>
          <CardMedia
            component="img"
            height="140"
            width="200"
            margin="20"
            image="https://thumbs.gfycat.com/AnySpryCurlew-size_restricted.gif"
            alt="img"
          />Você não adicionou nenhum pokemon
        </Vc>
      </CardTest>
    </div>
  );
}

export default Naoadd;
