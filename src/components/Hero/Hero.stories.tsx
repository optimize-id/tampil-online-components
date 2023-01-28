import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hero from "./Hero";

const Container = styled.div`
  min-width: 100%;
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => (
  <Container>
    <Hero {...args} />
  </Container>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: (
    <div>
      This is placeholder text for explaining to user about your company or your
      services. This is placeholder text for explaining to user about your
      company or your services. This is placeholder text for explaining to user
      about your company or your services. This is placeholder text for
      explaining to user about your company or your services.
    </div>
  ),
  title: "Lorem Ipsum Dolor Sit Amet, Eam Quas",
  image: "https://picsum.photos/580/480",
};

export const Inline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Inline.args = {
  children: (
    <div>
      This is placeholder text for explaining to user about your company or your
      services. This is placeholder text for explaining to user about your
      company or your services. This is placeholder text for explaining to user
      about your company or your services. This is placeholder text for
      explaining to user about your company or your services.
    </div>
  ),
  title: "Lorem Ipsum Dolor Sit Amet, Eam Quas",
  image: "https://picsum.photos/580/480",
  inline: true,
};
