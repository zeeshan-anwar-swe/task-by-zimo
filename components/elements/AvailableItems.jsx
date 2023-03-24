import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import Item from "./Item";

function AvailableItems({ products }) {
  return (
    <div className="avalible-items" id="items">
      <Container maxW={1400} my={16}>
        <Heading textAlign="center" mb={16} textTransform="uppercase">
          Available <span className="text-primary">ITEMS</span>
        </Heading>

        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          gap={8}
          placeItems="center"
        >
          {products.map((item) => (
            <GridItem key={item.id}>
              <Item item={item} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default AvailableItems;
