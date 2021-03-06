// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: JWaK283jnQd
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
import ButtonLink from "../../ButtonLink"; // plasmic-import: jzdXOPDUzV/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 9MzawQbD5r/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import sty from "./PlasmicHomeHero2.module.css"; // plasmic-import: JWaK283jnQd/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wTfucAc7Rr/icon
import websiteHeroImageTinypngMdyXn0Auz from "./images/websiteHeroImageTinypng.png"; // plasmic-import: MdyXN0Auz/picture

export type PlasmicHomeHero2__VariantMembers = {};

export type PlasmicHomeHero2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeHero2__VariantsArgs;
export const PlasmicHomeHero2__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeHero2__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHomeHero2__ArgsType;
export const PlasmicHomeHero2__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicHomeHero2__OverridesType = {
  root?: p.Flex<"section">;
  container?: p.Flex<"div">;
  link?: p.Flex<"a">;
  buttonLink?: p.Flex<typeof ButtonLink>;
  svg?: p.Flex<"svg">;
  img?: p.Flex<"img">;
  dock?: p.Flex<"div">;
};

export interface DefaultHomeHero2Props {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicHomeHero2__RenderFunc(props: {
  variants: PlasmicHomeHero2__VariantsArgs;
  args: PlasmicHomeHero2__ArgsType;
  overrides: PlasmicHomeHero2__OverridesType;
  dataFetches?: PlasmicHomeHero2__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__global_theme_altHeadlineFont]: hasVariant(
          globalVariants,
          "theme",
          "altHeadlineFont"
        ),
        [sty.root__global_theme_dark]: hasVariant(
          globalVariants,
          "theme",
          "dark"
        )
      })}
    >
      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        className={classNames(projectcss.all, sty.container)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ld5Xo)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hXsHa)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__oTKn)}
            >
              <div
                className={classNames(projectcss.all, sty.freeBox__i24L, {
                  [sty.freeBox__global_theme_altHeadlineFont__i24LFQkvX]:
                    hasVariant(globalVariants, "theme", "altHeadlineFont"),
                  [sty.freeBox__global_theme_dark__i24LH5AZc]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  )
                })}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox__jWzwi, {
                    [sty.freeBox__global_theme_altHeadlineFont__jWzwifQkvX]:
                      hasVariant(globalVariants, "theme", "altHeadlineFont"),
                    [sty.freeBox__global_theme_dark__jWzwih5AZc]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  })}
                >
                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__diuBg
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>
                            {"Build front-ends ?????? "}
                          </React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ fontStyle: "italic" }}
                          >
                            {"fast"}
                          </span>
                          <React.Fragment>
                            {".\nFor your own codebase."}
                          </React.Fragment>
                        </React.Fragment>
                      </div>
                    ),

                    value: args.children,
                    className: classNames(sty.slotTargetChildren, {
                      [sty.slotTargetChildren__global_theme_altHeadlineFont]:
                        hasVariant(globalVariants, "theme", "altHeadlineFont"),
                      [sty.slotTargetChildren__global_theme_dark]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    })
                  })}
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__hR0M9)}>
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__oJgaZ
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>
                          {
                            "Visually create everything from responsive pages to complex components. Integrate with any React stack, and "
                          }
                        </React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700 }}
                        >
                          {"empower anyone to ship"}
                        </span>
                        <React.Fragment>{"."}</React.Fragment>
                      </React.Fragment>
                    </div>
                  ),

                  value: args.slot,
                  className: classNames(sty.slotTargetSlot)
                })}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hr56W)}
            >
              <a
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.a, sty.link)}
                href={"https://studio.plasmic.app/" as const}
              >
                <ButtonLink
                  data-plasmic-name={"buttonLink"}
                  data-plasmic-override={overrides.buttonLink}
                  href={"https://plasmic.app/signup" as const}
                  icon={
                    <IconIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />
                  }
                  label={"Try Plasmic for free"}
                  type={["purpleSolid"]}
                />
              </a>
            </p.Stack>
          </p.Stack>
        </p.Stack>
      </div>

      <div
        className={classNames(projectcss.all, sty.freeBox__hbiPc, {
          [sty.freeBox__global_theme_dark__hbiPch5AZc]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__opfV)}>
          <div className={classNames(projectcss.all, sty.freeBox___5YW42)}>
            <img
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(projectcss.img, sty.img)}
              src={websiteHeroImageTinypngMdyXn0Auz}
            />

            {false ? (
              <div
                data-plasmic-name={"dock"}
                data-plasmic-override={overrides.dock}
                className={classNames(projectcss.all, sty.dock)}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "container", "link", "buttonLink", "svg", "img", "dock"],
  container: ["container", "link", "buttonLink", "svg"],
  link: ["link", "buttonLink", "svg"],
  buttonLink: ["buttonLink", "svg"],
  svg: ["svg"],
  img: ["img"],
  dock: ["dock"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  container: "div";
  link: "a";
  buttonLink: typeof ButtonLink;
  svg: "svg";
  img: "img";
  dock: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeHero2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeHero2__VariantsArgs;
    args?: PlasmicHomeHero2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHomeHero2__Fetches;
  } & Omit<PlasmicHomeHero2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeHero2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomeHero2__ArgProps,
      internalVariantPropNames: PlasmicHomeHero2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomeHero2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeHero2";
  } else {
    func.displayName = `PlasmicHomeHero2.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeHero2 = Object.assign(
  // Top-level PlasmicHomeHero2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    link: makeNodeComponent("link"),
    buttonLink: makeNodeComponent("buttonLink"),
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),
    dock: makeNodeComponent("dock"),

    // Metadata about props expected for PlasmicHomeHero2
    internalVariantProps: PlasmicHomeHero2__VariantProps,
    internalArgProps: PlasmicHomeHero2__ArgProps
  }
);

export default PlasmicHomeHero2;
/* prettier-ignore-end */
