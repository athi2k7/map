// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: 3Qfldk4cSlr
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
import SmallValuePropCard from "../../SmallValuePropCard"; // plasmic-import: ZsmzGgkZw2/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import ButtonLink from "../../ButtonLink"; // plasmic-import: jzdXOPDUzV/component
import Linky from "../../Linky"; // plasmic-import: EDH0JqEGKc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import sty from "./PlasmicValuePropCardsSection.module.css"; // plasmic-import: 3Qfldk4cSlr/css

import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: oElPELm1et/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wTfucAc7Rr/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: 7p8MViVJAB/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: OsdZlmfSEe/icon
import image16EjT54Ab5 from "./images/image16.png"; // plasmic-import: ejT54-AB5/picture

export type PlasmicValuePropCardsSection__VariantMembers = {
  backgrounds: "white";
};

export type PlasmicValuePropCardsSection__VariantsArgs = {
  backgrounds?: SingleChoiceArg<"white">;
};

type VariantPropType = keyof PlasmicValuePropCardsSection__VariantsArgs;
export const PlasmicValuePropCardsSection__VariantProps =
  new Array<VariantPropType>("backgrounds");

export type PlasmicValuePropCardsSection__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicValuePropCardsSection__ArgsType;
export const PlasmicValuePropCardsSection__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicValuePropCardsSection__OverridesType = {
  root?: p.Flex<"section">;
};

export interface DefaultValuePropCardsSectionProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  backgrounds?: SingleChoiceArg<"white">;
  className?: string;
}

function PlasmicValuePropCardsSection__RenderFunc(props: {
  variants: PlasmicValuePropCardsSection__VariantsArgs;
  args: PlasmicValuePropCardsSection__ArgsType;
  overrides: PlasmicValuePropCardsSection__OverridesType;
  dataFetches?: PlasmicValuePropCardsSection__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__backgrounds_white]: hasVariant(
          variants,
          "backgrounds",
          "white"
        )
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___6Ki2K)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__rdYwr)}>
          {p.renderPlasmicSlot({
            defaultContents: "Limitless expressivity",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__p5RyP)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <SmallValuePropCard
                  className={classNames(
                    "__wab_instance",
                    sty.smallValuePropCard___7Hj
                  )}
                  followupLink={
                    <Linky
                      className={classNames("__wab_instance", sty.linky__gV1Be)}
                      link={
                        "https://studio.plasmic.app/?starters=general,site-builder" as const
                      }
                      style={["noPadding"]}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__oaxHp
                        )}
                      >
                        {"Browse starter projects ->"}
                      </div>
                    </Linky>
                  }
                  icon={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__aq7Sb
                      )}
                      colors={"teal" as const}
                    >
                      <Icon17Icon
                        className={classNames(projectcss.all, sty.svg__dcyx1)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                />

                <SmallValuePropCard
                  className={classNames(
                    "__wab_instance",
                    sty.smallValuePropCard___3OPfW
                  )}
                  followupLink={
                    <Linky
                      className={classNames("__wab_instance", sty.linky__ttAm)}
                      link={
                        "https://studio.plasmic.app/?starters=general,site-builder" as const
                      }
                      style={["noPadding"]}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ggmhv
                        )}
                      >
                        {"Browse starter projects ->"}
                      </div>
                    </Linky>
                  }
                  icon={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__uxBtf
                      )}
                      colors={"green" as const}
                    >
                      <Icon6Icon
                        className={classNames(projectcss.all, sty.svg__uEKeE)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                />

                <SmallValuePropCard
                  className={classNames(
                    "__wab_instance",
                    sty.smallValuePropCard__mvZqT
                  )}
                  followupLink={
                    <Linky
                      className={classNames("__wab_instance", sty.linky___4K2N)}
                      link={
                        "https://studio.plasmic.app/?starters=general,site-builder" as const
                      }
                      style={["noPadding"]}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__haC2A
                        )}
                      >
                        {"Browse starter projects ->"}
                      </div>
                    </Linky>
                  }
                  icon={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__sWpvw
                      )}
                      colors={"yellow" as const}
                    >
                      <Icon15Icon
                        className={classNames(projectcss.all, sty.svg__rt4U)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                />
              </React.Fragment>
            ),
            value: args.children
          })}
        </p.Stack>
      </p.Stack>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValuePropCardsSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValuePropCardsSection__VariantsArgs;
    args?: PlasmicValuePropCardsSection__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicValuePropCardsSection__Fetches;
  } & Omit<PlasmicValuePropCardsSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValuePropCardsSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValuePropCardsSection__ArgProps,
      internalVariantPropNames: PlasmicValuePropCardsSection__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicValuePropCardsSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValuePropCardsSection";
  } else {
    func.displayName = `PlasmicValuePropCardsSection.${nodeName}`;
  }
  return func;
}

export const PlasmicValuePropCardsSection = Object.assign(
  // Top-level PlasmicValuePropCardsSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicValuePropCardsSection
    internalVariantProps: PlasmicValuePropCardsSection__VariantProps,
    internalArgProps: PlasmicValuePropCardsSection__ArgProps
  }
);

export default PlasmicValuePropCardsSection;
/* prettier-ignore-end */
