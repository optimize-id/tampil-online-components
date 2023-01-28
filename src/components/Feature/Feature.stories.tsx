import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Grid from "../Grid";

import Feature from "./Feature";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Feature",
  component: Feature,
} as ComponentMeta<typeof Feature>;

const Container = styled.div`
  padding: 12px;
  max-width: 900px;
  margin: 0 auto;
`;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PrimaryTemplate: ComponentStory<typeof Feature> = (args) => (
  <Container>
    <Grid columns={3}>
      <Feature {...args}>
        This is placeholder text for explaining to user about your company or
        your services. This is placeholder text for explaining to user
      </Feature>

      <Feature {...args}>
        This is placeholder text for explaining to user about your company or
        your services. This is placeholder text for explaining to user
      </Feature>

      <Feature {...args}>
        This is placeholder text for explaining to user about your company or
        your services. This is placeholder text for explaining to user
      </Feature>

      <Feature {...args}>
        This is placeholder text for explaining to user about your company or
        your services. This is placeholder text for explaining to user
      </Feature>

      <Feature {...args}>
        This is placeholder text for explaining to user about your company or
        your services. This is placeholder text for explaining to user
      </Feature>

      <Feature {...args}>
        This is placeholder text for explaining to user about your company or
        your services. This is placeholder text for explaining to user
      </Feature>
    </Grid>
  </Container>
);

export const Primary = PrimaryTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Title",
};
