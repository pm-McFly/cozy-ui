```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Variants from 'cozy-ui/docs/components/Variants'
import SearchBar from 'cozy-ui/transpiled/react/SearchBar'
import Typography from 'cozy-ui/transpiled/react/Typography'
import CloudIcon from 'cozy-ui/transpiled/react/Icons/Cloud'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import RadioGroup from 'cozy-ui/transpiled/react/RadioGroup'
import Radio from 'cozy-ui/transpiled/react/Radios'
import FormControl from 'cozy-ui/transpiled/react/FormControl'
import FormLabel from 'cozy-ui/transpiled/react/FormLabel'

const initialVariants = [{ button: false, customIcon: false, disabledClear: false, disabledHover: false }]
initialState = { size: 'small' }

;

<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => (
      <>
         <FormControl component="fieldset">
          <FormLabel component="legend">Size</FormLabel>
          <RadioGroup
            aria-label="radio"
            name="size"
            row
            value={state.size}
            onChange={event => { setState({ size: event.target.value }) }}
          >
            <FormControlLabel
              value="small"
              label="Small"
              control={<Radio />}
            />
            <FormControlLabel
              value="medium"
              label="Medium"
              control={<Radio />}
            />
            <FormControlLabel
              value="large"
              label="Large"
              control={<Radio />}
            />
            <FormControlLabel
              value="auto"
              label="Auto"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <Typography className="u-mb-half">Normal</Typography>
        <SearchBar className="u-mb-2"
          elevation={0}
          size={state.size}
          disabledClear={variant.disabledClear}
          disabledHover={variant.disabledHover}
          type={variant.button ? "button" : "search"}
          icon={variant.customIcon ? CloudIcon : undefined}
          label={variant.button ? <Typography color="primary">This is a label</Typography> : undefined}
        />
        <Typography className="u-mb-half">With elevation</Typography>
        <SearchBar className="u-mb-2"
          elevation={10}
          size={state.size}
          disabledClear={variant.disabledClear}
          disabledHover={variant.disabledHover}
          type={variant.button ? "button" : "search"}
          icon={variant.customIcon ? CloudIcon : undefined}
          label={variant.button ? <Typography color="primary">This is a label</Typography> : undefined}
        />
        <Typography className="u-mb-half">Disabled</Typography>
        <SearchBar
          disabled
          size={state.size}
          disabledClear={variant.disabledClear}
          disabledHover={variant.disabledHover}
          type={variant.button ? "button" : "search"}
          icon={variant.customIcon ? CloudIcon : undefined}
          label={variant.button ? <Typography color="primary">This is a label</Typography> : undefined}
        />
      </>
    )}
  </Variants>
</DemoProvider>
```
