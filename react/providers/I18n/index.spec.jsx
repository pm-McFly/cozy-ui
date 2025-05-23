import { render, fireEvent, screen } from '@testing-library/react'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import I18n, { useI18n, createUseI18n } from '.'

const locales = { helloworld: 'Hello World !' }

const DumbI18nHelloWorld = ({ t, f, lang }) => (
  <div>
    {t('helloworld')}
    <br />
    {f('2020-01-06', 'D LLL', { useAdditionalDayOfYearTokens: true })}
    <br />
    {lang}
  </div>
)

const I18nHelloWorldHook = () => {
  const { t, f, lang } = useI18n()
  return <DumbI18nHelloWorld t={t} f={f} lang={lang} />
}

const I18nHelloWorldOldAPI = (props, context) => {
  const { t, f, lang } = context
  return <DumbI18nHelloWorld t={t} f={f} lang={lang} />
}

I18nHelloWorldOldAPI.contextTypes = {
  t: PropTypes.func,
  f: PropTypes.func,
  lang: PropTypes.string
}

describe('new context api', () => {
  it('should provide t and f and lang through useI18n hook', () => {
    render(
      <I18n lang="en" dictRequire={() => locales}>
        <I18nHelloWorldHook />
      </I18n>
    )
    expect(
      screen.getByText('Hello World !', { exact: false })
    ).toBeInTheDocument()
    expect(screen.getByText('6 Jan', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('en', { exact: false })).toBeInTheDocument()
  })
})

describe('old context api', () => {
  it('should provide t and f and lang through old context API', () => {
    render(
      <I18n lang="en" dictRequire={() => locales}>
        <I18nHelloWorldOldAPI />
      </I18n>
    )
    expect(
      screen.getByText('Hello World !', { exact: false })
    ).toBeInTheDocument()
    expect(screen.getByText('6 Jan', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('en', { exact: false })).toBeInTheDocument()
  })
})

describe('use i18n with custom locales', () => {
  const locales = {
    en: {
      'hello-world': 'Hello world'
    },
    fr: {
      'hello-world': 'Bonjour le monde'
    }
  }
  const useI18n = createUseI18n(locales)
  const Child = () => {
    const { t } = useI18n()
    return <div>{t('hello-world')}</div>
  }
  const Parent = () => {
    const [lang, setLang] = useState('en')
    return (
      <>
        <button onClick={() => setLang('fr')}>switch to French</button>
        <I18n lang={lang} dictRequire={() => ({})}>
          <Child />
        </I18n>
      </>
    )
  }

  it('should work', () => {
    const root = render(<Parent />)
    const btn = root.getByText('switch to French')
    expect(root.getByText('Hello world')).toBeTruthy()
    fireEvent.click(btn)
    expect(root.getByText('Bonjour le monde')).toBeTruthy()
  })
})

describe('use i18n with custom locales and fallback to default', () => {
  const locales = {
    en: {
      'hello-world': 'Hello world',
      'how-are-you': 'How are you ?'
    },
    fr: {
      'hello-world': 'Bonjour le monde'
    }
  }
  const useI18n = createUseI18n(locales)
  const Child = () => {
    const { t } = useI18n()
    return (
      <div>
        <div>{t('hello-world')}</div>
        <div>{t('how-are-you')}</div>
      </div>
    )
  }
  const Parent = () => {
    return (
      <>
        <I18n lang="fr" dictRequire={() => ({})}>
          <Child />
        </I18n>
      </>
    )
  }

  it('should display missing key in default langage', () => {
    const root = render(<Parent />)
    expect(root.getByText('Bonjour le monde')).toBeInTheDocument()
    expect(root.getByText('How are you ?')).toBeInTheDocument()
  })
})
