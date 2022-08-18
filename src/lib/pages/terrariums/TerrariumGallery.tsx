import { Box } from "@chakra-ui/react";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "assets/terrarium/gallery/1.jpg",
    width: 1,
    height: 1.8,
  },
  {
    src: "assets/terrarium/gallery/2.jpg",
    width: 1.4,
    height: 1.8,
  },
  {
    src: "assets/terrarium/gallery/3.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "assets/terrarium/gallery/4.jpg",
    width: 1,
    height: 2,
  },
  {
    src: "assets/terrarium/gallery/5.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "assets/terrarium/gallery/6.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "assets/terrarium/gallery/7.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "assets/terrarium/gallery/8.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "assets/terrarium/gallery/9.jpg",
    width: 2.5,
    height: 3.7,
  },
  {
    src: "assets/terrarium/gallery/10.png",
    width: 3,
    height: 1.7,
  },
  {
    src: "assets/terrarium/gallery/13.jpg",
    width: 9.6,
    height: 9.6,
  },
  {
    src: "assets/terrarium/gallery/11.png",
    width: 3000,
    height: 1688,
  },
  {
    src: "assets/terrarium/gallery/12.jpg",
    width: 1.8,
    height: 1.4,
  },
];

function TerrariumGallery() {
  return (
    <Box maxWidth="8xl">
      <Gallery photos={photos} />
    </Box>
  );
}

export default TerrariumGallery;
