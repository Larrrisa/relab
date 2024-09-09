import Link from "next/link";
import Image from "next/image";
import iphone from "../../images/iphone.webp";
import style from "../../styles/store.module.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function Store() {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <Image src={iphone} width={400} height={500} alt="" />
      </div>
      <Link className={style.price} href="">
        <div className={style.price_current}>86 956 &#8381;</div>
        <div className={style.price_old}>99 990 &#8381;</div>
      </Link>
      <div className={style.price_special}>85 251 &#8381;</div>
      <div className={style.name}>
        <span className={style.tag}>Apple</span>
        <span className={style.divider}>/</span>
        <span className={style.tag}>Смартфон iPhone 12 Pro 128Gb</span>
        <span className={style.divider}>/</span>
        <span className={style.tag}>6.1&#34; </span>
        <span className={style.divider}>/</span>
        <span className={style.tag}>2532x1170</span>
        <span className={style.divider}>/</span>
        <span className={style.tag}>OLED</span>
        <span className={style.divider}>/</span>
        <span className={style.tag}>128ГБ</span>
      </div>
      <div className={style.rating}>
        <span>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              name="read-only"
              value={5}
              readOnly
              sx={{
                color: "#a73afd",
              }}
            />
          </Box>
        </span>
        <span className={style.rating_number}>87</span>
      </div>
      <div className={style.rassrochka}>Рассрочка 0-0-6</div>
      <div className={style.buttons}>
        <button>В корзину</button>
        <span>
          {<FavoriteBorderOutlinedIcon style={{ color: "#a73afd" }} />}
        </span>
      </div>
    </div>
  );
}
