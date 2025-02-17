import { UnstyledButton } from '@mantine/core'
import { useBooleanToggle, useClickOutside, useElementSize, useMergedRef } from '@mantine/hooks'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactDraggable from 'react-draggable'
import { useTransition, animated } from 'react-spring'
import { useDebouncedCallback, useThrottledCallback } from 'use-debounce'

import type { FC, CSSProperties, MouseEvent, MouseEventHandler } from 'react'
import type { DraggableProps as ReactDraggableProps, DraggableEventHandler } from 'react-draggable'

import { getConfiguratorElement } from 'helpers/getConfiguratorElement'
import { useConfiguratorStoreBare } from 'store/configurator'

import { DraggableOptions } from './components/DraggableOptions'
import { GuideLine } from './components/GuideLine'
import { useStyles } from './Draggable.styles'
import { recalculatePosition } from './recalculatePosition'

type Bounds = {
  top: number
  bottom: number
  right: number
  left: number
}

const defaultBounds = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}

type DraggableProps = Partial<Omit<ReactDraggableProps, 'defaultClassName'>> & {
  onRemove: MouseEventHandler<HTMLButtonElement>
  onEdit: (params: { initialLeft: number; finalLeft: number; y: number }) => void
  propsDependencies: any[]
  id: string
  zoom: number
}

export const Draggable: FC<DraggableProps> = ({
  bounds = 'parent',
  onStop,
  onRemove,
  onEdit,
  defaultPosition,
  children,
  propsDependencies,
  id,
  zoom,
  ...rest
}) => {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [isLocked, toggleLocked] = useBooleanToggle(false)
  const [isDragging, setDragging] = useState(false)

  const [position, setPosition] = useState(defaultPosition)

  const canvasBounds = useRef<Bounds>(defaultBounds)
  const [boxBounds, setBounds] = useState<Bounds>(defaultBounds)

  const boxRef = useRef<HTMLDivElement>(null)
  const optionsRef = useRef<HTMLDivElement>(null)
  const outsideClickRef = useClickOutside(() => toggleOpened(false))

  const canvas = useConfiguratorStoreBare((state) => state.canvas)
  const { ref: sizeRef, width: childWidth, height: childHeight } = useElementSize()

  const { classes, cx } = useStyles({ zoom })

  const guideLinesTransition = useTransition(isDragging, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: isDragging ? 300 : 0,
    config: {
      duration: 175
    }
  })

  const isOnOptionsNode = (e: MouseEvent<HTMLButtonElement>) =>
    optionsRef.current === e.target || optionsRef.current?.contains(e.target as Node) || false

  const saveConfiguratorCanvasPosition = () => {
    const canvasNode = getConfiguratorElement()

    canvasBounds.current = canvasNode?.getBoundingClientRect() || defaultBounds
  }

  const debouncedSetBounds = useDebouncedCallback(() => {
    const { top, left, bottom, right } = boxRef.current?.getBoundingClientRect() || defaultBounds

    setBounds({
      top: Math.abs(Math.round((top - canvasBounds.current.top) / zoom)),
      right: Math.abs(Math.round((right - canvasBounds.current.right) / zoom)),
      bottom: Math.abs(Math.round((bottom - canvasBounds.current.bottom) / zoom)),
      left: Math.abs(Math.round((left - canvasBounds.current.left) / zoom))
    })
  }, 8)

  const getCenterXPosition = () => {
    const { left } = boxRef.current?.getBoundingClientRect() || defaultBounds

    return {
      initialLeft: left,
      finalLeft: (window.innerWidth - childWidth - 500) / 2
    }
  }

  const handleDrag: DraggableEventHandler = useCallback(
    (e) => {
      e.stopPropagation()

      if (!isOnOptionsNode(e as MouseEvent<HTMLButtonElement>)) {
        debouncedSetBounds()

        if (opened) {
          toggleOpened(false)
        }
      }
    },
    [debouncedSetBounds, opened, toggleOpened]
  )

  const throttledRecalculatePosition = useThrottledCallback(() => {
    const updatedPosition = recalculatePosition(id, position?.x || 0, position?.y || 0)

    setPosition(updatedPosition)
  }, 500)

  useEffect(() => {
    throttledRecalculatePosition()
    debouncedSetBounds()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas.height, canvas.width, id, childHeight, childWidth])

  return (
    <ReactDraggable
      bounds={bounds}
      position={position}
      defaultClassName={cx(classes.wrapper, 'draggable', {
        [classes.disabled]: isLocked,
        [classes.active]: opened,
        [classes.dragging]: isDragging
      })}
      defaultClassNameDragging={classes.wrapperGrabbing}
      disabled={isLocked}
      cancel=".options"
      scale={zoom}
      offsetParent={document?.getElementById('configurator-canvas') || undefined}
      nodeRef={boxRef}
      onStart={() => {
        saveConfiguratorCanvasPosition()

        setDragging(true)
      }}
      onStop={(e, state) => {
        if (onStop) onStop(e, state)

        if (!isOnOptionsNode(e as MouseEvent<HTMLButtonElement>)) {
          setPosition({ x: state.x, y: state.y })
        }

        setDragging(false)
      }}
      onDrag={handleDrag}
      {...rest}
    >
      <UnstyledButton
        ref={useMergedRef(boxRef, outsideClickRef, sizeRef)}
        onClick={(e: any) => {
          if (!isOnOptionsNode(e)) {
            toggleOpened()
          }
        }}
        className={cx(classes.box, {
          [classes.dragging]: isDragging
        })}
        id={id}
        style={
          {
            '--offset-left': `${boxBounds.left}px`,
            '--offset-right': `${boxBounds.right}px`,
            '--offset-top': `${boxBounds.top}px`,
            '--offset-bottom': `${boxBounds.bottom}px`
          } as CSSProperties
        }
      >
        {guideLinesTransition(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <GuideLine direction="left" value={boxBounds.left} zoom={zoom} />
                <GuideLine direction="right" value={boxBounds.right} zoom={zoom} />
                <GuideLine direction="top" value={boxBounds.top} zoom={zoom} />
                <GuideLine direction="bottom" value={boxBounds.bottom} zoom={zoom} />
              </animated.div>
            )
        )}
        {children}

        <DraggableOptions
          visible={opened}
          forceUpdateDependencies={[position, ...propsDependencies]}
          onEdit={() => {
            onEdit({
              ...getCenterXPosition(),
              y: position?.y || 0
            })
          }}
          onRemove={onRemove}
          onLock={() => toggleLocked()}
          locked={isLocked}
          boxRef={boxRef}
          optionsRef={optionsRef}
          zoom={canvas.zoom}
        />
      </UnstyledButton>
    </ReactDraggable>
  )
}
