import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Demopage(props) {
  console.log(props);
  const [data, setdata] = useState();

  const fetchlist = async () => {
    try {
      await fetch("data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          data.sort((a, b) => {
            if (new Date(a.createddate) > new Date(b.createddate)) {
              return -1;
            }
            if (new Date(b.createddate) > new Date(a.createddate)) {
              return 1;
            }
            return 0;
          });
          console.log(data);
          setdata(data);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <>
      {data?.map((e, i) => {
        return (
          <>
            <Card
              style={{
                marginTop: "10px",
              }}
              sx={{ maxWidth: 345 }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={e.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {e.createddate}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button> */}
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </>
        );
      })}
      <Button size="small">Load More</Button>
    </>
  );
}
