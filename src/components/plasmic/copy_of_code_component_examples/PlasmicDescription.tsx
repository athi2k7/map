// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vchhDpLmBjnFZg2EZxeLCc
// Component: DKCwyXvvV0k
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

import projectcss from "./plasmic_copy_of_code_component_examples.module.css"; // plasmic-import: vchhDpLmBjnFZg2EZxeLCc/projectcss
import sty from "./PlasmicDescription.module.css"; // plasmic-import: DKCwyXvvV0k/css

import PlasmicLogoIcon from "./icons/PlasmicIcon__PlasmicLogo"; // plasmic-import: mIEnL0qWzI5t/icon

export type PlasmicDescription__VariantMembers = {};

export type PlasmicDescription__VariantsArgs = {};
type VariantPropType = keyof PlasmicDescription__VariantsArgs;
export const PlasmicDescription__VariantProps = new Array<VariantPropType>();

export type PlasmicDescription__ArgsType = {
  profilepic?: React.ReactNode;
  description?: React.ReactNode;
};

type ArgPropType = keyof PlasmicDescription__ArgsType;
export const PlasmicDescription__ArgProps = new Array<ArgPropType>(
  "profilepic",
  "description"
);

export type PlasmicDescription__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultDescriptionProps {
  profilepic?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

function PlasmicDescription__RenderFunc(props: {
  variants: PlasmicDescription__VariantsArgs;
  args: PlasmicDescription__ArgsType;
  overrides: PlasmicDescription__OverridesType;
  dataFetches?: PlasmicDescription__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <PlasmicLogoIcon
            className={classNames(projectcss.all, sty.svg__ulFxL)}
            role={"img"}
          />
        ),

        value: args.profilepic
      })}

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Built with love by the Plasmic team. ",
          value: args.description
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDescription__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDescription__VariantsArgs;
    args?: PlasmicDescription__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicDescription__Fetches;
  } & Omit<PlasmicDescription__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDescription__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicDescription__ArgProps,
      internalVariantPropNames: PlasmicDescription__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicDescription__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDescription";
  } else {
    func.displayName = `PlasmicDescription.${nodeName}`;
  }
  return func;
}

export const PlasmicDescription = Object.assign(
  // Top-level PlasmicDescription renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicDescription
    internalVariantProps: PlasmicDescription__VariantProps,
    internalArgProps: PlasmicDescription__ArgProps
  }
);

export default PlasmicDescription;
/* prettier-ignore-end */