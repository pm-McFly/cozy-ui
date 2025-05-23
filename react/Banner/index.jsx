import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'
import Divider from '../Divider'
import Grid from '../Grid'
import Paper from '../Paper'
import Typography from '../Typography'

/**
 * A banner displays a prominent message and related optional actions.
 */
const Banner = ({
  icon,
  bgcolor,
  className,
  text,
  buttonOne,
  buttonTwo,
  inline,
  noDivider,
  disableIconStyles
}) => {
  const position = {
    row: [8, 4],
    column: [12, 12]
  }
  const size = inline ? position.row : position.column

  return (
    <>
      <Paper elevation={0} square>
        <div
          className={cx(styles['c-banner-wrapper'], className)}
          style={bgcolor && { backgroundColor: bgcolor }}
        >
          <Grid container justifyContent="space-between">
            <Grid
              container
              item
              xs={12}
              lg={size[0]}
              alignItems={disableIconStyles ? 'flex-start' : 'center'}
              wrap="nowrap"
            >
              {icon && (
                <Grid item>
                  <div
                    className={cx({
                      [styles['c-banner-icon']]: !disableIconStyles
                    })}
                  >
                    {icon}
                  </div>
                </Grid>
              )}
              <Grid item className={styles['c-banner-text']}>
                <Typography variant="body2">{text}</Typography>
              </Grid>
            </Grid>
            {(buttonOne || buttonTwo) && (
              <Grid
                container
                item
                xs={12}
                lg={size[1]}
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item className={styles['c-banner-buttons']}>
                  {buttonOne && buttonOne}
                  {buttonTwo && buttonTwo}
                </Grid>
              </Grid>
            )}
          </Grid>
        </div>
      </Paper>
      {!noDivider && <Divider />}
    </>
  )
}

Banner.propTypes = {
  /** Image to the left of the row */
  icon: PropTypes.node,
  /** Custom background color */
  bgcolor: PropTypes.string,
  /** Text inside the banner */
  text: PropTypes.node,
  /** Button to be displayed first, the left one */
  buttonOne: PropTypes.node,
  /** Button to be displayed in second, the right one */
  buttonTwo: PropTypes.node,
  /** Show banner on one line (only desktop) */
  inline: PropTypes.bool,
  /** Disables the bottom divider */
  noDivider: PropTypes.bool,
  /** Disables the styles of the wrapper around the icon */
  disableIconWrapper: PropTypes.bool
}

export default Banner
