name: 📝 Issue Report
description: Report a bug or request a new feature for ngx-intro
labels: ["triage"]
body:
  - type: markdown
    attributes:
      value: |
        # Thank you for reporting an issue in ngx-intro!
        Please complete the following information to help us resolve the problem quickly.

  - type: dropdown
    id: issue-type
    attributes:
      label: Issue Type
      description: What type of issue are you reporting?
      options:
        - Bug (error or problem)
        - Feature (new functionality)
        - Enhancement
        - Documentation
        - Other
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: Description
      description: Clearly describe in detail the issue or enhancement you want to see in ngx-intro
      placeholder: Explain the problem or feature you need...
    validations:
      required: true

  - type: textarea
    id: expected-behavior
    attributes:
      label: Expected Behavior
      description: What did you expect to happen?
      placeholder: Describe what should happen...
    validations:
      required: true

  - type: textarea
    id: actual-behavior
    attributes:
      label: Actual Behavior
      description: What actually happened?
      placeholder: Describe what occurred...
    validations:
      required: true

  - type: textarea
    id: reproduction-steps
    attributes:
      label: Steps to Reproduce
      description: Indicate the specific steps to reproduce the problem
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See the error
    validations:
      required: false

  - type: textarea
    id: code-example
    attributes:
      label: Code Example
      description: If possible, provide a minimal example that demonstrates the problem
      placeholder: ```typescript
        // Your code here
        ```
      render: typescript
    validations:
      required: false

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots and Error Messages
      description: If relevant, include screenshots or error messages
      placeholder: You can drag and drop images here or paste error messages
    validations:
      required: false

  - type: dropdown
    id: browsers
    attributes:
      label: Affected Browsers
      description: In which browsers have you seen the issue?
      multiple: true
      options:
        - Chrome
        - Firefox
        - Safari
        - Edge
        - Opera
        - Other
    validations:
      required: false

  - type: input
    id: angular-version
    attributes:
      label: Angular Version
      description: Which version of Angular are you using?
      placeholder: e.g. Angular 17.0.0
    validations:
      required: false

  - type: input
    id: ngx-intro-version
    attributes:
      label: ngx-intro Version
      description: Which version of ngx-intro are you using?
      placeholder: e.g. 1.0.0
    validations:
      required: false

  - type: textarea
    id: environment
    attributes:
      label: Additional Environment Information
      description: Provide any other relevant information about your environment
      placeholder: Operating system, other relevant libraries, etc.
    validations:
      required: false

  - type: checkboxes
    id: terms
    attributes:
      label: Confirmation
      description: Please confirm the following
      options:
        - label: I have searched for existing issues before creating this report
          required: true
        - label: I have provided all necessary information to understand the problem
          required: true
