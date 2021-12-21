// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: Xbdmg_vawY
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import sty from "./PlasmicPricingFeatureTableRow.module.css"; // plasmic-import: Xbdmg_vawY/css

import Icon30Icon from "./icons/PlasmicIcon__Icon30"; // plasmic-import: 4AIkExQxz/icon

export type PlasmicPricingFeatureTableRow__VariantMembers = {
  header: "header";
};

export type PlasmicPricingFeatureTableRow__VariantsArgs = {
  header?: SingleBooleanChoiceArg<"header">;
};

type VariantPropType = keyof PlasmicPricingFeatureTableRow__VariantsArgs;
export const PlasmicPricingFeatureTableRow__VariantProps =
  new Array<VariantPropType>("header");

export type PlasmicPricingFeatureTableRow__ArgsType = {
  name?: React.ReactNode;
  free?: React.ReactNode;
  pro?: React.ReactNode;
  team?: React.ReactNode;
  enterprise?: React.ReactNode;
  infoIcon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPricingFeatureTableRow__ArgsType;
export const PlasmicPricingFeatureTableRow__ArgProps = new Array<ArgPropType>(
  "name",
  "free",
  "pro",
  "team",
  "enterprise",
  "infoIcon"
);

export type PlasmicPricingFeatureTableRow__OverridesType = {
  root?: p.Flex<"div">;
  starterBox?: p.Flex<"div">;
};

export interface DefaultPricingFeatureTableRowProps {
  name?: React.ReactNode;
  free?: React.ReactNode;
  pro?: React.ReactNode;
  team?: React.ReactNode;
  enterprise?: React.ReactNode;
  infoIcon?: React.ReactNode;
  header?: SingleBooleanChoiceArg<"header">;
  className?: string;
}

function PlasmicPricingFeatureTableRow__RenderFunc(props: {
  variants: PlasmicPricingFeatureTableRow__VariantsArgs;
  args: PlasmicPricingFeatureTableRow__ArgsType;
  overrides: PlasmicPricingFeatureTableRow__OverridesType;
  dataFetches?: PlasmicPricingFeatureTableRow__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__header]: hasVariant(variants, "header", "header")
      })}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__qtTw9, {
          [sty.freeBox__header__qtTw9UgN1M]: hasVariant(
            variants,
            "header",
            "header"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__mepxl)}>
          {p.renderPlasmicSlot({
            defaultContents: "Feature Name",
            value: args.name
          })}
        </div>

        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox__mxYpr)}>
            {(hasVariant(variants, "header", "header") ? false : true)
              ? p.renderPlasmicSlot({
                  defaultContents: (
                    <Icon30Icon
                      className={classNames(projectcss.all, sty.svg__ezGgz)}
                      role={"img"}
                    />
                  ),

                  value: args.infoIcon
                })
              : null}
          </div>
        ) : null}

        <div
          data-plasmic-name={"starterBox"}
          data-plasmic-override={overrides.starterBox}
          className={classNames(projectcss.all, sty.starterBox, {
            [sty.starterBox__header]: hasVariant(variants, "header", "header")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "✓",
            value: args.free,
            className: classNames(sty.slotTargetFree, {
              [sty.slotTargetFree__header]: hasVariant(
                variants,
                "header",
                "header"
              )
            })
          })}
        </div>

        <div
          className={classNames(projectcss.all, sty.freeBox___6COYr, {
            [sty.freeBox__header___6COYrUgN1M]: hasVariant(
              variants,
              "header",
              "header"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "✓",
            value: args.pro,
            className: classNames(sty.slotTargetPro, {
              [sty.slotTargetPro__header]: hasVariant(
                variants,
                "header",
                "header"
              )
            })
          })}
        </div>

        <div
          className={classNames(projectcss.all, sty.freeBox__kNdEw, {
            [sty.freeBox__header__kNdEwUgN1M]: hasVariant(
              variants,
              "header",
              "header"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "✓",
            value: args.team,
            className: classNames(sty.slotTargetTeam, {
              [sty.slotTargetTeam__header]: hasVariant(
                variants,
                "header",
                "header"
              )
            })
          })}
        </div>

        <div
          className={classNames(projectcss.all, sty.freeBox__bnx1R, {
            [sty.freeBox__header__bnx1RUgN1M]: hasVariant(
              variants,
              "header",
              "header"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "✓",
            value: args.enterprise,
            className: classNames(sty.slotTargetEnterprise, {
              [sty.slotTargetEnterprise__header]: hasVariant(
                variants,
                "header",
                "header"
              )
            })
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "starterBox"],
  starterBox: ["starterBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  starterBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPricingFeatureTableRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPricingFeatureTableRow__VariantsArgs;
    args?: PlasmicPricingFeatureTableRow__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPricingFeatureTableRow__Fetches;
  } & Omit<PlasmicPricingFeatureTableRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPricingFeatureTableRow__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPricingFeatureTableRow__ArgProps,
      internalVariantPropNames: PlasmicPricingFeatureTableRow__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPricingFeatureTableRow__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingFeatureTableRow";
  } else {
    func.displayName = `PlasmicPricingFeatureTableRow.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingFeatureTableRow = Object.assign(
  // Top-level PlasmicPricingFeatureTableRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    starterBox: makeNodeComponent("starterBox"),

    // Metadata about props expected for PlasmicPricingFeatureTableRow
    internalVariantProps: PlasmicPricingFeatureTableRow__VariantProps,
    internalArgProps: PlasmicPricingFeatureTableRow__ArgProps
  }
);

export default PlasmicPricingFeatureTableRow;
/* prettier-ignore-end */
