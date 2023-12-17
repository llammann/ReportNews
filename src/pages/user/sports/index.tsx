import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../../assets/style/user/Politics.scss";
import { Link } from "react-router-dom";

type Props = {};

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// like
import { like } from "../../../redux/slices/PageSlice";
import { dislike } from "../../../redux/slices/PageSlice";
// import { sort } from "../../../redux/slices/PageSlice";
import type { RootState } from "../../../redux/store/Store";
import { useSelector, useDispatch } from "react-redux";

function Sports({}: Props) {

  const relatedNews = useSelector((state: RootState) => state.allPages.value);
  const dispatch = useDispatch();
  console.log("relatedNews", relatedNews);

  return (
    <>
      <section className="head">
        <div className="container">
          <h1>Sports</h1>
          <ul>
            <li>
              <a href="#">FOOTBALL</a>
            </li>
            <li>
              <a href="#">INDIVIDUAL SPORTS</a>
            </li>
            <li>
              <a href="#">TEAM SPORTS</a>
            </li>
            <li>
              <a href="#">FORMULA 1</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="allNews">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {relatedNews.sports.map((news) => (
                <Grid item key={news.id} xs={3} sm={4} md={3}>
                  <Link to="#">
                    <div className="card">
                      <div className="imgWrapper">
                        <img src="https://picsum.photos/200" alt="" />
                      </div>
                      <div className="articles">
                        <p className="header">{news.title}</p>
                        <div className="time">
                          <p className="day">{news.date}</p>
                          <span>.</span>
                          <p className="clock">{news.time}</p>
                        </div>
                        <div className="info">
                          <button
                            id={String(news.id)}
                            onClick={() => {
                              dispatch(like(news));
                              console.log("likee");
                            }}
                          >
                            <ThumbUpOutlinedIcon />
                            <p>{news.likes}</p>
                          </button>
                          <button
                            id={String(news.id)}
                            onClick={() => {
                              dispatch(dislike(news));
                              console.log("dislikee");
                            }}
                          >
                            <ThumbDownAltOutlinedIcon />
                            <p>{news.dislikes}</p>
                          </button>
                          <button id="{news.id}">
                            <VisibilityOutlinedIcon />
                            <p>{news.views}</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </section>
    </>
  );
}

export default Sports;
