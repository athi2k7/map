// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: ncmAa8DpLu
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
import sty from "./PlasmicFirstStepLink.module.css"; // plasmic-import: ncmAa8DpLu/css

export type PlasmicFirstStepLink__VariantMembers = {};

export type PlasmicFirstStepLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicFirstStepLink__VariantsArgs;
export const PlasmicFirstStepLink__VariantProps = new Array<VariantPropType>();

export type PlasmicFirstStepLink__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  destination?: string | PageHref;
};

type ArgPropType = keyof PlasmicFirstStepLink__ArgsType;
export const PlasmicFirstStepLink__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "destination"
);

export type PlasmicFirstStepLink__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultFirstStepLinkProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  destination?: string | PageHref;
  className?: string;
}

function PlasmicFirstStepLink__RenderFunc(props: {
  variants: PlasmicFirstStepLink__VariantsArgs;
  args: PlasmicFirstStepLink__ArgsType;
  overrides: PlasmicFirstStepLink__OverridesType;
  dataFetches?: PlasmicFirstStepLink__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.a, projectcss.root_reset, sty.root)}
      href={args.destination}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Intro to Plasmic ->",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}

      {p.renderPlasmicSlot({
        defaultContents: "Overview of the workflow and how it works with code.",
        value: args.slot,
        className: classNames(sty.slotTargetSlot)
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFirstStepLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFirstStepLink__VariantsArgs;
    args?: PlasmicFirstStepLink__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFirstStepLink__Fetches;
  } & Omit<PlasmicFirstStepLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFirstStepLink__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFirstStepLink__ArgProps,
      internalVariantPropNames: PlasmicFirstStepLink__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFirstStepLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFirstStepLink";
  } else {
    func.displayName = `PlasmicFirstStepLink.${nodeName}`;
  }
  return func;
}

export const PlasmicFirstStepLink = Object.assign(
  // Top-level PlasmicFirstStepLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFirstStepLink
    internalVariantProps: PlasmicFirstStepLink__VariantProps,
    internalArgProps: PlasmicFirstStepLink__ArgProps
  }
);

export default PlasmicFirstStepLink;
/* prettier-ignore-end */
