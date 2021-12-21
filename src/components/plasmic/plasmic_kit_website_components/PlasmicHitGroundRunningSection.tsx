// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: QePfxm7iE7o
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ValuePropSection from "../../ValuePropSection"; // plasmic-import: 6Zq5_xjO9F/component
import SmallValuePropCard from "../../SmallValuePropCard"; // plasmic-import: ZsmzGgkZw2/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import Linky from "../../Linky"; // plasmic-import: EDH0JqEGKc/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import sty from "./PlasmicHitGroundRunningSection.module.css"; // plasmic-import: QePfxm7iE7o/css

import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: VwsBlWFPux/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: YhhYiXTtXT/icon
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: qrdgDrcfzD/icon
import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: CyAK3Gjxwu/icon
import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: ymoKOCfuo-/icon
import image7RU1GD3ENw from "./images/image7.svg"; // plasmic-import: rU1g-d3eNw/picture
import montageNsQNwrjDr from "./images/montage.png"; // plasmic-import: nsQNwrjDr/picture
import publishpngMLv4CVe6I from "./images/publishpng.png"; // plasmic-import: MLv4cVE6I/picture
import image16EjT54Ab5 from "./images/image16.png"; // plasmic-import: ejT54-AB5/picture
import image404XNgS0Ykp from "./images/image40.png"; // plasmic-import: 4XNgS0YKP/picture
import designSystemFyeMyi6Nk from "./images/designSystem.png"; // plasmic-import: fyeMYI6Nk/picture

export type PlasmicHitGroundRunningSection__VariantMembers = {};

export type PlasmicHitGroundRunningSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicHitGroundRunningSection__VariantsArgs;
export const PlasmicHitGroundRunningSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHitGroundRunningSection__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHitGroundRunningSection__ArgsType;
export const PlasmicHitGroundRunningSection__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicHitGroundRunningSection__OverridesType = {
  root?: p.Flex<typeof ValuePropSection>;
  valueB1?: p.Flex<typeof SmallValuePropCard>;
  valueB42?: p.Flex<typeof SmallValuePropCard>;
  valueB2?: p.Flex<typeof SmallValuePropCard>;
  valueB4?: p.Flex<typeof SmallValuePropCard>;
  valueB3?: p.Flex<typeof SmallValuePropCard>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultHitGroundRunningSectionProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicHitGroundRunningSection__RenderFunc(props: {
  variants: PlasmicHitGroundRunningSection__VariantsArgs;
  args: PlasmicHitGroundRunningSection__ArgsType;
  overrides: PlasmicHitGroundRunningSection__OverridesType;
  dataFetches?: PlasmicHitGroundRunningSection__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <ValuePropSection
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      actionButton={null}
      backgroundImage={
        <img
          alt={""}
          className={classNames(projectcss.img, sty.img__ePqty)}
          src={image7RU1GD3ENw}
        />
      }
      className={classNames("__wab_instance", sty.root)}
      description={null}
      extraSlot={
        <React.Fragment>
          <SmallValuePropCard
            data-plasmic-name={"valueB1"}
            data-plasmic-override={overrides.valueB1}
            actionButton={null}
            className={classNames("__wab_instance", sty.valueB1)}
            description={
              "Or learn from our collection of example projects and tutorials. Landing pages, storefronts, portfolios, apps, and more."
            }
            followupLink={
              <Linky
                className={classNames("__wab_instance", sty.linky__jGmvE)}
                link={"https://plasmic.app/signup" as const}
                style={["noPadding"]}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ymDwD
                  )}
                >
                  {"Sign up to browse starter projects ➔"}
                </div>
              </Linky>
            }
            icon={
              <GraphicIcon
                className={classNames(
                  "__wab_instance",
                  sty.graphicIcon___9Kw8Q
                )}
                colors={"lightCyanSolid" as const}
              >
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__a3P)}
                  role={"img"}
                />
              </GraphicIcon>
            }
            ltr={"ltr" as const}
            reverse={"reverse" as const}
            rightImage={"rightImage" as const}
            showcaseImage={
              <img
                alt={""}
                className={classNames(projectcss.img, sty.img__kEwAg)}
                loading={"lazy" as const}
                src={montageNsQNwrjDr}
              />
            }
          >
            {"Grab a template and go."}
          </SmallValuePropCard>

          <SmallValuePropCard
            data-plasmic-name={"valueB42"}
            data-plasmic-override={overrides.valueB42}
            actionButton={null}
            className={classNames("__wab_instance", sty.valueB42)}
            description={
              "Deploy a complete hosted website end-to-end. Push changes directly to GitHub as PRs or commits. Or connect to your own CI/CD webhooks. And even spin up a CodeSandbox to experiment right in the browser."
            }
            followupLink={
              <Linky
                className={classNames("__wab_instance", sty.linky__fQbi)}
                link={"/learn/todomvc-tutorial/" as const}
                style={["noPadding"]}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kLTg0
                  )}
                >
                  {"Learn about publishing ➔"}
                </div>
              </Linky>
            }
            icon={
              <GraphicIcon
                className={classNames("__wab_instance", sty.graphicIcon__izFq)}
                colors={"lightCyanSolid" as const}
              >
                <Icon20Icon
                  className={classNames(projectcss.all, sty.svg__sfz3F)}
                  role={"img"}
                />
              </GraphicIcon>
            }
            ltr={"ltr" as const}
            rightImage={"rightImage" as const}
            showcaseImage={
              <img
                alt={""}
                className={classNames(projectcss.img, sty.img__bWVpS)}
                loading={"lazy" as const}
                src={publishpngMLv4CVe6I}
              />
            }
          >
            {"Publish in one click."}
          </SmallValuePropCard>

          <SmallValuePropCard
            data-plasmic-name={"valueB2"}
            data-plasmic-override={overrides.valueB2}
            actionButton={null}
            className={classNames("__wab_instance", sty.valueB2)}
            description={
              "Move up the starting line. Let us handle all the grungy translation of vector graphics to web standards with our ultra-high-fidelity design-to-code importer. Then use Plasmic to make it production-ready."
            }
            followupLink={
              <Linky
                className={classNames("__wab_instance", sty.linky__adWb)}
                link={"/learn/importing-from-figma" as const}
                style={["noPadding"]}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__l9Fvf
                  )}
                >
                  {"Learn about the Figma plugin ➔"}
                </div>
              </Linky>
            }
            icon={
              <GraphicIcon
                className={classNames("__wab_instance", sty.graphicIcon__s3FBd)}
                colors={"lightCyanSolid" as const}
              >
                <Icon18Icon
                  className={classNames(projectcss.all, sty.svg__nxpNo)}
                  role={"img"}
                />
              </GraphicIcon>
            }
            ltr={"ltr" as const}
            reverse={"reverse" as const}
            rightImage={"rightImage" as const}
            showcaseImage={
              <img
                alt={""}
                className={classNames(projectcss.img, sty.img__gHw2R)}
                loading={"lazy" as const}
                src={image16EjT54Ab5}
              />
            }
          >
            {"Import from Figma."}
          </SmallValuePropCard>

          <SmallValuePropCard
            data-plasmic-name={"valueB4"}
            data-plasmic-override={overrides.valueB4}
            actionButton={null}
            className={classNames("__wab_instance", sty.valueB4)}
            description={p.renderPlasmicSlot({
              defaultContents:
                "Starting on something new? Generate a full Next.js site from scratch.",
              value: args.children
            })}
            followupLink={
              <Linky
                className={classNames("__wab_instance", sty.linky__vYnch)}
                link={"/learn/quickstart/" as const}
                style={["noPadding"]}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ejkN
                  )}
                >
                  {"Developer quickstart ➔"}
                </div>
              </Linky>
            }
            icon={
              <GraphicIcon
                className={classNames(
                  "__wab_instance",
                  sty.graphicIcon___6W0Yy
                )}
                colors={"lightCyanSolid" as const}
              >
                <Icon13Icon
                  className={classNames(projectcss.all, sty.svg___6JVb8)}
                  role={"img"}
                />
              </GraphicIcon>
            }
            ltr={"ltr" as const}
            rightImage={"rightImage" as const}
            showcaseImage={
              <img
                alt={""}
                className={classNames(projectcss.img, sty.img__umMsq)}
                loading={"lazy" as const}
                src={image404XNgS0Ykp}
              />
            }
          >
            {"Generate a full codebase."}
          </SmallValuePropCard>

          <SmallValuePropCard
            data-plasmic-name={"valueB3"}
            data-plasmic-override={overrides.valueB3}
            actionButton={null}
            className={classNames("__wab_instance", sty.valueB3)}
            description={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zMn6
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {"Go beyond theming and create fully accessible, "}
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"bespoke"}
                  </span>
                  <React.Fragment>
                    {
                      " design systems without a single line of code, using the Plume meta design system."
                    }
                  </React.Fragment>
                </React.Fragment>
              </div>
            }
            followupLink={
              <Linky
                className={classNames("__wab_instance", sty.linky___1WWPx)}
                link={"/learn/plume/" as const}
                style={["noPadding"]}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gGdVk
                  )}
                >
                  {"Learn about Plume ➔"}
                </div>
              </Linky>
            }
            icon={
              <GraphicIcon
                className={classNames("__wab_instance", sty.graphicIcon__yGM)}
                colors={"lightCyanSolid" as const}
              >
                <Icon19Icon
                  className={classNames(projectcss.all, sty.svg__ssjT6)}
                  role={"img"}
                />
              </GraphicIcon>
            }
            ltr={"ltr" as const}
            reverse={"reverse" as const}
            rightImage={"rightImage" as const}
            showcaseImage={
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <img
                  alt={""}
                  className={classNames(projectcss.img, sty.img__d33R)}
                  loading={"lazy" as const}
                  src={designSystemFyeMyi6Nk}
                />
              </div>
            }
          >
            {"A system for design systems."}
          </SmallValuePropCard>
        </React.Fragment>
      }
      extras={["withExtraSlot1", "centerAligned"]}
      header={null}
      icon={null}
      slot62={
        "Whether you use Typescript or ES6, Gatsby or Next, Webpack or Parcel. Start with a single component and work up to an entire screen."
      }
      title={
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__xiVaE,
            {
              [sty.text__global_theme_altHeadlineFont__xiVaEfQkvX]: hasVariant(
                globalVariants,
                "theme",
                "altHeadlineFont"
              )
            }
          )}
        >
          <React.Fragment>
            <React.Fragment>{"Hit the ground "}</React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontStyle: "italic" }}
            >
              {"running"}
            </span>
            <React.Fragment>{"."}</React.Fragment>
          </React.Fragment>
        </div>
      }
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "valueB1",
    "valueB42",
    "valueB2",
    "valueB4",
    "valueB3",
    "freeBox"
  ],
  valueB1: ["valueB1"],
  valueB42: ["valueB42"],
  valueB2: ["valueB2"],
  valueB4: ["valueB4"],
  valueB3: ["valueB3", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof ValuePropSection;
  valueB1: typeof SmallValuePropCard;
  valueB42: typeof SmallValuePropCard;
  valueB2: typeof SmallValuePropCard;
  valueB4: typeof SmallValuePropCard;
  valueB3: typeof SmallValuePropCard;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHitGroundRunningSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHitGroundRunningSection__VariantsArgs;
    args?: PlasmicHitGroundRunningSection__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHitGroundRunningSection__Fetches;
  } & Omit<PlasmicHitGroundRunningSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHitGroundRunningSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHitGroundRunningSection__ArgProps,
      internalVariantPropNames: PlasmicHitGroundRunningSection__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHitGroundRunningSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHitGroundRunningSection";
  } else {
    func.displayName = `PlasmicHitGroundRunningSection.${nodeName}`;
  }
  return func;
}

export const PlasmicHitGroundRunningSection = Object.assign(
  // Top-level PlasmicHitGroundRunningSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    valueB1: makeNodeComponent("valueB1"),
    valueB42: makeNodeComponent("valueB42"),
    valueB2: makeNodeComponent("valueB2"),
    valueB4: makeNodeComponent("valueB4"),
    valueB3: makeNodeComponent("valueB3"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicHitGroundRunningSection
    internalVariantProps: PlasmicHitGroundRunningSection__VariantProps,
    internalArgProps: PlasmicHitGroundRunningSection__ArgProps
  }
);

export default PlasmicHitGroundRunningSection;
/* prettier-ignore-end */
