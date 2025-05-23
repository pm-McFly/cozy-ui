import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import ConfirmDialog from './ConfirmDialog'
import Icon from '../Icon'
import Paper from '../Paper'
import { makeStyles } from '../styles'

const useStyles = makeStyles({
  floatingIcon: {
    top: '-2.25rem',
    width: '4.5rem',
    height: '4.5rem'
  }
})

/**
 * Dialog for confirmation actions linked to the Cozy system (permissions, authentication, etc.)
 */
const PermissionDialog = ({
  open,
  icon,
  title,
  content,
  actions,
  actionsLayout,
  onClose
}) => {
  const styles = useStyles()

  return (
    <ConfirmDialog
      open={open}
      size="small"
      disableTitleAutoPadding
      classes={{ paper: 'u-ov-visible' }}
      componentsProps={{
        dialogTitle: {
          className: 'u-flex u-flex-justify-center u-ta-center u-pt-2 u-pb-half'
        },
        dialogContent: {
          className: 'u-ov-visible'
        }
      }}
      title={
        <>
          <Paper
            elevation={2}
            className={cx(
              styles.floatingIcon,
              'u-pos-absolute u-bdrs-circle u-flex'
            )}
          >
            <Icon className="u-m-auto" icon={icon} size={48} />
          </Paper>

          {title}
        </>
      }
      content={content}
      actions={actions}
      actionsLayout={actionsLayout}
      onClose={onClose}
    />
  )
}

PermissionDialog.propTypes = {
  /** To open/close the modal */
  open: PropTypes.bool.isRequired,
  /** Icon to describe the action to be taken */
  icon: PropTypes.func.isRequired,
  /** Title of the modal */
  title: PropTypes.string.isRequired,
  /** Content of the modal */
  content: PropTypes.node,
  /** Actions of the modal */
  actions: PropTypes.node,
  /** Actions can be displayed as "rows" or "columns" */
  actionsLayout: PropTypes.oneOf(['row', 'column']),
  /** Triggered function on modal close action */
  onClose: PropTypes.func
}

export default PermissionDialog
