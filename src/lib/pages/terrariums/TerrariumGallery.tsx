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
    src: "assets/terrarium/gallery/5.jpg",
    width: 2,
    height: 1,
  },
  {
    src: "assets/terrarium/gallery/4.jpg",
    width: 1,
    height: 2,
  },
  {
    src: "assets/terrarium/gallery/1.jpg",
    width: 1,
    height: 1.8,
  },
  {
    src: "assets/terrarium/gallery/3.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "assets/terrarium/gallery/2.jpg",
    width: 1.4,
    height: 1.8,
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
];

function TerrariumGallery() {
  return (
    <Box maxWidth="6xl">
      <Gallery photos={photos} />
    </Box>
  );
}

export default TerrariumGallery;
