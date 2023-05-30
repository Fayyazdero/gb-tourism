import React, { useEffect } from "react";
import styled from "styled-components";
import { get } from "lodash";
import "froala-editor/js/plugins.pkgd.min";
import FroalaEditorComponent from "react-froala-wysiwyg";
import FieldError from "../../Form/FieldErrors";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  froalaImageDeleteAction,
  froalaImageUploadAction,
} from "../../../redux/actions/imageUpload";

const StyledFroalaEditor = styled.div`
  border: 1px solid
    ${(props) =>
      props?.touches && props?.error ? "red" : props.theme.borderColor};
  border-radius: 10px;
  .fr-toolbar {
    border: 0px;
  }
  .fr-second-toolbar {
    display: none;
  }
  .fr-wrapper {
    border: 0px !important;
    background: transparent !important;
  }
  .fr-toolbar .fr-btn {
    border-radius: 0px !important;
  }
  .fr-toolbar .fr-btn-grp {
    margin: 0 !important;
  }
  .fr-toolbar .fr-command.fr-btn {
    padding: 0px 0px !important;
    margin: 0 !important;
  }
  .fr-toolbar {
    background: #fff;
  }
  .fr-toolbar .fr-btn:hover {
    background: #e5e5e5 !important;
    color: #333;
  }
  .fr-element.fr-view {
    height: 100%;
    padding: 20px;
  }
  .fr-element.fr-view {
    color: ${(props) => props.theme.bToW} !important;
  }
  .fr-command.fr-btn {
    border-radius: 5px !important;
  }
  // .fr-command.fr-btn.fr-active {
  //   & svg {
  //     & path {
  //       fill: #333 !important;
  //     }
  //   }
  // }
`;

const ErrorWrapper = styled.div`
  top: -18px;
`;

export default function FroalaEditor(props) {
  const { success, error } = useSelector((state) => state.froalaImage);
  const dispatch = useDispatch();
  useEffect(() => {
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [error]);
  useEffect(() => {
    success &&
      toast.success(success, {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [success]);
  const defaultOptions = {
    placeholder: "Type your post...",
    toolbarButtons: [
      // "fullscreen",
      "bold",
      "italic",
      "underline",
      // "strikeThrough",
      // "subscript",
      // "superscript",
      "|",
      "fontFamily",
      "fontSize",
      "textColor",
      "emoticons",
      "insertLink",
      "insertImage",
      "backgroundColor",
      "quote",
      "-",
      "insertTable",
      "|",
      "specialCharacters",
      "paragraphStyle",
      "|",
      "paragraphFormat",
      "align",
      "formatOL",
      "formatUL",
      "clearFormatting",
      "|",
      "html",
      "|",
      "undo",
      "redo",
      "code",
    ],
    fontFamily: {
      Poppins: "Poppins",
      Jost: "Jost",
    },
    htmlAllowedEmptyTags: ["iframe"],
    attribution: false,
    height: "350px",
    requestHeaders: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    requestWithCORS: false,
    requestWithCredentials: false,
    // imageUploadURL: "https://storymugg.herokuapp.com/file/upload",
    // imageUploadParam: "file",
    imagesLoadURL: "https://storymugg.herokuapp.com",
    imageMaxSize: 2 * 1024 * 1024,
    imageAllowedTypes: ["jpeg", "jpg", "png"],
    htmlDoNotWrapTags: ["script", "style", "code", "pre"],
    events: {
      contentChanged: function () {
        var editor = this;
        props.onChange(editor.html.get());
      },
      "image.beforeUpload": async function (files) {
        var editor = this;
        if (files.length) {
          var reader = new FormData();
          reader.append("file", files[0]);
          const getFile = await dispatch(froalaImageUploadAction(reader));
          if (getFile) {
            editor.image.insert(getFile, null, null, editor.image.get());
          } else {
            editor.image.remove();
          }
        }
        return false;
      },
      "image.beforeRemove": async function () {
        // await deleteFile()
        const filename = props.froalaImage.split("/api/file/")[1];
        dispatch(froalaImageDeleteAction(filename));
      },
    },
    htmlAllowedAttrs: [
      "accept",
      "accept-charset",
      "accesskey",
      "action",
      "align",
      "allowfullscreen",
      "allowtransparency",
      "alt",
      "aria-.*",
      "async",
      "autocomplete",
      "autofocus",
      "autoplay",
      "autosave",
      "background",
      "bgcolor",
      "border",
      "charset",
      "cellpadding",
      "cellspacing",
      "checked",
      "cite",
      "class",
      "color",
      "cols",
      "colspan",
      "content",
      "contenteditable",
      "contextmenu",
      "controls",
      "coords",
      "data",
      "data-.*",
      "datetime",
      "default",
      "defer",
      "dir",
      "dirname",
      "disabled",
      "download",
      "draggable",
      "dropzone",
      "enctype",
      "for",
      "form",
      "formaction",
      "frameborder",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "http-equiv",
      "icon",
      "id",
      "ismap",
      "itemprop",
      "keytype",
      "kind",
      "label",
      "lang",
      "language",
      "list",
      "loop",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "mozallowfullscreen",
      "multiple",
      "muted",
      "name",
      "novalidate",
      "open",
      "optimum",
      "pattern",
      "ping",
      "placeholder",
      "playsinline",
      "poster",
      "preload",
      "pubdate",
      "radiogroup",
      "readonly",
      "rel",
      "required",
      "reversed",
      "rows",
      "rowspan",
      "sandbox",
      "scope",
      "scoped",
      "scrolling",
      "seamless",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "src",
      "srcdoc",
      "srclang",
      "srcset",
      "start",
      "step",
      "summary",
      "spellcheck",
      "tabindex",
      "target",
      "title",
      "type",
      "translate",
      "usemap",
      "value",
      "valign",
      "webkitallowfullscreen",
      "width",
      "wrap",
    ],
    quickInsertEnabled: false,

    // customize:
    videoInsertButtons: ["videoBack", "|", "videoByURL", "videoEmbed"],
    imageInsertButtons: ["imageBack", "|", "imageUpload", "imageByURL"],
  };

  // const loadResources = () => {
  //   const link = document.createElement("link");
  //   link.rel = "stylesheet";
  //   link.href =
  //     "https://cdnjs.cloudflare.com/ajax/libs/froala-editor/4.0.9/css/froala_editor.pkgd.min.css";

  //   document.head.append(link);
  // };

  React.useEffect(() => {
    // loadResources();
  }, []);

  return (
    <>
      <StyledFroalaEditor
        className={props.className}
        error={props?.errors && props?.errors[props?.name]}
        touches={props?.touched && props?.touched[props?.name]}
      >
        <FroalaEditorComponent
          onModelChange={(content) => {
            props.onChange(content);
          }}
          imageInserted={() => {
            console.log("file is inserted");
          }}
          model={props.content}
          config={{
            key: "te1C2sE6A5C4C5G4H4jC1QUd1Xd1OZJ1ABVJRDRNGGUE1ITrE1D4A3A10B1B6D4B1G4D4=",
            ...defaultOptions,
            ...get(props, "options", {}),
          }}
          tag="textarea"
          onImageUpload={() => console.log("please")}
          placeholder="Type your post..."
        />
      </StyledFroalaEditor>
      {props?.errors && props?.touched && (
        <ErrorWrapper className="position-relative mb-4 pb-1 error-wrapper">
          {props?.errors[props?.name] && props?.touched[props?.name] ? (
            <FieldError>{props?.errors[props?.name]}</FieldError>
          ) : null}
        </ErrorWrapper>
      )}
    </>
  );
}
