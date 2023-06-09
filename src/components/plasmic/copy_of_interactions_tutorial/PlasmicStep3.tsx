// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: htABaZqjni3rpeuBprLs6a
// Component: Nk8BHd2VxzLcF

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import Button from "../../Button"; // plasmic-import: Z2-bJBY1mYy2V/component
import Switch from "../../Switch"; // plasmic-import: zq8NVUIaMV8-I/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_interactions_tutorial.module.css"; // plasmic-import: htABaZqjni3rpeuBprLs6a/projectcss
import sty from "./PlasmicStep3.module.css"; // plasmic-import: Nk8BHd2VxzLcF/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 3x-g38V1yDuQmW/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: OR1sp1EE4k9P8M/icon

export type PlasmicStep3__VariantMembers = {};
export type PlasmicStep3__VariantsArgs = {};
type VariantPropType = keyof PlasmicStep3__VariantsArgs;
export const PlasmicStep3__VariantProps = new Array<VariantPropType>();

export type PlasmicStep3__ArgsType = {};
type ArgPropType = keyof PlasmicStep3__ArgsType;
export const PlasmicStep3__ArgProps = new Array<ArgPropType>();

export type PlasmicStep3__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  switch1?: p.Flex<typeof Switch>;
  switch2?: p.Flex<typeof Switch>;
};

export interface DefaultStep3Props {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicStep3__RenderFunc(props: {
  variants: PlasmicStep3__VariantsArgs;
  args: PlasmicStep3__ArgsType;
  overrides: PlasmicStep3__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "switch1.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return undefined;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "switch2.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return undefined;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <div
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2Ysf3
              )}
            >
              {"FAQ"}
            </div>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              onClick={async event => {
                const $steps = {};
                $steps["setSwitch1IsChecked"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "IuMtKXFVMJNBM",
                            componentUuid: "Nk8BHd2VxzLcF",
                            argName: "variable"
                          },
                          () => ({
                            objRoot: $state,
                            variablePath: ["switch1", "isChecked"]
                          })
                        ),
                        operation: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "IuMtKXFVMJNBM",
                            componentUuid: "Nk8BHd2VxzLcF",
                            argName: "operation"
                          },
                          () => 0
                        ),
                        value: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "IuMtKXFVMJNBM",
                            componentUuid: "Nk8BHd2VxzLcF",
                            argName: "value"
                          },
                          () => true
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariable",
                          interactionUuid: "IuMtKXFVMJNBM",
                          componentUuid: "Nk8BHd2VxzLcF"
                        },
                        () =>
                          (({ variable, value, startIndex, deleteCount }) => {
                            const { objRoot, variablePath } = variable;

                            p.set(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["setSwitch1IsChecked"] === "object" &&
                  typeof $steps["setSwitch1IsChecked"].then === "function"
                ) {
                  $steps["setSwitch1IsChecked"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "IuMtKXFVMJNBM",
                      componentUuid: "Nk8BHd2VxzLcF"
                    },
                    $steps["setSwitch1IsChecked"]
                  );
                }
                $steps["setSwitch2IsChecked"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "1IIPLYaHK3APG",
                            componentUuid: "Nk8BHd2VxzLcF",
                            argName: "variable"
                          },
                          () => ({
                            objRoot: $state,
                            variablePath: ["switch2", "isChecked"]
                          })
                        ),
                        operation: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "1IIPLYaHK3APG",
                            componentUuid: "Nk8BHd2VxzLcF",
                            argName: "operation"
                          },
                          () => 0
                        ),
                        value: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "1IIPLYaHK3APG",
                            componentUuid: "Nk8BHd2VxzLcF",
                            argName: "value"
                          },
                          () => true
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariable",
                          interactionUuid: "1IIPLYaHK3APG",
                          componentUuid: "Nk8BHd2VxzLcF"
                        },
                        () =>
                          (({ variable, value, startIndex, deleteCount }) => {
                            const { objRoot, variablePath } = variable;

                            p.set(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["setSwitch2IsChecked"] === "object" &&
                  typeof $steps["setSwitch2IsChecked"].then === "function"
                ) {
                  $steps["setSwitch2IsChecked"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "1IIPLYaHK3APG",
                      componentUuid: "Nk8BHd2VxzLcF"
                    },
                    $steps["setSwitch2IsChecked"]
                  );
                }
              }}
            >
              {"Switch all"}
            </Button>
            <div className={classNames(projectcss.all, sty.freeBox__fmXuI)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rnXgJ
                )}
              >
                {"Question: Why is the earth round?"}
              </div>
              <Switch
                data-plasmic-name={"switch1"}
                data-plasmic-override={overrides.switch1}
                className={classNames("__wab_instance", sty.switch1)}
                isChecked={
                  p.generateStateValueProp($state, ["switch1", "isChecked"]) ??
                  false
                }
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, ["switch1", "isChecked"])(
                    eventArgs[0]
                  );
                }}
              >
                {"Switch me"}
              </Switch>
              {(() => {
                try {
                  return $state.switch1.isChecked;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hIZu
                  )}
                >
                  {"Answer: Gravity"}
                </div>
              ) : null}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__r4CQ)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__q0Db
                )}
              >
                {"Question: Why is the sky blue?"}
              </div>
              <Switch
                data-plasmic-name={"switch2"}
                data-plasmic-override={overrides.switch2}
                className={classNames("__wab_instance", sty.switch2)}
                isChecked={
                  p.generateStateValueProp($state, ["switch2", "isChecked"]) ??
                  false
                }
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, ["switch2", "isChecked"])(
                    eventArgs[0]
                  );
                }}
              >
                {"Switch me"}
              </Switch>
              {(() => {
                try {
                  return $state.switch2.isChecked;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return true;
                  }
                  throw e;
                }
              })() ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vfqX4
                  )}
                >
                  {"Answer: It's complicated"}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "switch1", "switch2"],
  button: ["button"],
  switch1: ["switch1"],
  switch2: ["switch2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
  switch1: typeof Switch;
  switch2: typeof Switch;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStep3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStep3__VariantsArgs;
    args?: PlasmicStep3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStep3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStep3__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicStep3__ArgProps,
          internalVariantPropNames: PlasmicStep3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicStep3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStep3";
  } else {
    func.displayName = `PlasmicStep3.${nodeName}`;
  }
  return func;
}

export const PlasmicStep3 = Object.assign(
  // Top-level PlasmicStep3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    switch1: makeNodeComponent("switch1"),
    switch2: makeNodeComponent("switch2"),

    // Metadata about props expected for PlasmicStep3
    internalVariantProps: PlasmicStep3__VariantProps,
    internalArgProps: PlasmicStep3__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicStep3;
/* prettier-ignore-end */
