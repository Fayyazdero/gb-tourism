import React from "react";
import { TourProvider } from "@reactour/tour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import FormikContainer from "../../components/Form/FormikContainer";

const steps = [
  {
    selector: ".reactour-title",
    content: `Ok, let's start with the Title of the Post. Title is a required Field so please type your title.`,
  },
  {
    selector: ".reactour-desc",
    content: `A good description makes your post popular, add your description in the given field.`,
  },
  {
    selector: ".reactour-search",
    content: `You don't have an image? No worries search here and get your desired image`,
  },
  {
    selector: ".reactour-editor",
    content: `By using the rich editor customize your post the way you like.`,
  },
  {
    selector: ".reactour-upload",
    content: `Upload an Image by using Image Uploader or Image URL input.`,
  },
  {
    selector: ".reactour-caption",
    content: `Add Image caption here.`,
  },
  {
    selector: ".reactour-category",
    content: `Category is a required filed, press the dropdown and select post related category.`,
  },
  {
    selector: ".reactour-tags",
    content: `Add at least 5 tags so that people can easily reaches your post. To add a tag just type any word and press enter.`,
  },
  {
    selector: ".reactour-publish",
    content: `You have an option to publish or draft your post.`,
  },
  {
    selector: ".reactour-preview",
    content: `You can preview your post here.`,
  },
  {
    selector: ".reactour-button",
    content: `Finally click the save post button to create your post. Enjoy :)`,
  },
];

export const Provider = () => {
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  return (
    <TourProvider
      steps={steps}
      afterOpen={disableBody}
      beforeClose={enableBody}
    >
      <FormikContainer />
    </TourProvider>
  );
};
