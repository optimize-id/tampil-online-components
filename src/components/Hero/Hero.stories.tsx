import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button";
import Feature from "../Feature";
import Grid from "../Grid";

import Hero from "./Hero";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ButtonGroup = styled.div`
  display: inline-flex;
  gap: 12px;
  justify-content: center;
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PrimaryTemplate: ComponentStory<typeof Hero> = (args) => (
  <Container>
    <Hero {...args}>
      <div>
        This is placeholder text for explaining to user about your company or
        your services. This is placeholder text for explaining to user about
        your company or your services. This is placeholder text for explaining
        to user about your company or your services. This is placeholder text
        for explaining to user about your company or your services.
      </div>
    </Hero>
  </Container>
);

export const Primary = PrimaryTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Lorem Ipsum Dolor Sit Amet, Eam Quas",
  image: "https://picsum.photos/580/480",
};

const InlineTemplate: ComponentStory<typeof Hero> = (args) => (
  <Container>
    <Hero {...args}>
      <ChildrenContainer>
        <div>
          This is placeholder text for explaining to user about your company or
          your services. This is placeholder text for explaining to user about
          your company or your services. This is placeholder text for explaining
          to user about your company or your services. This is placeholder text
          for explaining to user about your company or your services.
        </div>

        <ButtonGroup>
          <Button variant="outline">Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </ChildrenContainer>
    </Hero>
  </Container>
);

export const Inline = InlineTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Inline.args = {
  title: "Lorem Ipsum Dolor Sit Amet, Eam Quas",
  image: "https://picsum.photos/580/480",
  inline: true,
};

const HeroFeatureTemplate: ComponentStory<typeof Hero> = (args) => (
  <Container>
    <Hero {...args}>
      <Grid columns={2}>
        <Feature title="Title">
          This is placeholder text for explaining to user about your company or
          your services. This is placeholder text for explaining to user
        </Feature>
        <Feature title="Title">
          This is placeholder text for explaining to user about your company or
          your services. This is placeholder text for explaining to user
        </Feature>
        <Feature title="Title">
          This is placeholder text for explaining to user about your company or
          your services. This is placeholder text for explaining to user
        </Feature>
        <Feature title="Title">
          This is placeholder text for explaining to user about your company or
          your services. This is placeholder text for explaining to user
        </Feature>
      </Grid>
    </Hero>
  </Container>
);

export const HeroFeature = HeroFeatureTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeroFeature.args = {
  image: "https://picsum.photos/580/480",
  reverse: true,
};
