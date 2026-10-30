import * as React from "react"

type AnyProps = Record<string, any>

function composeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    }
  }
}

function mergeProps(slotProps: AnyProps, childProps: AnyProps) {
  const merged = { ...slotProps, ...childProps }

  for (const key of Object.keys(childProps)) {
    const slotValue = slotProps[key]
    const childValue = childProps[key]

    if (/^on[A-Z]/.test(key)) {
      merged[key] =
        slotValue && childValue
          ? (...args: unknown[]) => {
              childValue(...args)
              slotValue(...args)
            }
          : (childValue ?? slotValue)
    } else if (key === "style") {
      merged[key] = { ...slotValue, ...childValue }
    } else if (key === "className") {
      merged[key] = [slotValue, childValue].filter(Boolean).join(" ")
    }
  }

  return merged
}

function Slot({
  children,
  ref,
  ...props
}: React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }) {
  const child = React.Children.only(children) as React.ReactElement<AnyProps>
  const childRef = child.props.ref as React.Ref<HTMLElement> | undefined

  return React.cloneElement(child, {
    ...mergeProps(props, child.props),
    ref: ref && childRef ? composeRefs(ref, childRef) : (ref ?? childRef),
  })
}

export { Slot }
