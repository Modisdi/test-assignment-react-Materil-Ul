## Test assignment React
### Seedium

#### Getting started
##### API documentation https://app.swaggerhub.com/apis/KostyaZgara/Test-Assignment-React/1.0.0
##### API endpoint http://test.api.sportstars.club/academies

1. Check all requirements from this file. Check API documentation
1. Clone the repository
1. Create branch from master with name `test-<email>`. Please specify email on that we have send invite
1. You will start from `src/` folder. All your written code will be there.
1. Then in GitLab create new "Merge Request" where source branch it will be you `test-<email>` branch and target will be `master` branch. Title of merge request set `Test work: <email>`. In `Assignee` field please set our developer `@kostyazgara`, then submit merge request.

#### To Do

1. For component view you can decrease time work using one of react frameworks (Bootstrap, Material UI or other)
1. Develop page with form that will create academy `POST /academies`
    - Be attention, in `POST` method if you specify `type` - `football` you will get an error. This case you should catch and process on the client-side
1. Develop page with table that will output list of academies
    - API exposes getting list with cursor pagination. Need implement properly pagination on front side (for testing you can use limit "1")

#### Will be a plus

1. Use the next libraries:
    - normalizr
    - redux
    - react-redux
    - redux-actions
    - formik
    - redux-saga
    - reselect
    - styled-components
1. Use hooks
1. Use concept Lazy Loading and Code Splitting for pages
1. Make custom components (don't use any ready components)
1. Use Typescript

#### What we expect

1. Good project structure
1. Pure, fast and reusable components
1. Understanding React API
1. Understanding reconciliation and how to avoid it
1. Be able to distinguish smart components (aka containers) and dump components
1. Good HTML and CSS knowledge

#### Before start

1. Feel free to organize your application structure as you want.
1. Feel free to use any libs from npm.
1. Feel free to implement any design, it's not required for this test assignment

#### Estimations

1. Project and tasks understanding - **30 minutes**
1. Project set up (clone repository, install dependencies) - **30 minutes**
1. Set up initial skeleton for app (create pages) - **1 hour**
1. Develop form (actions, reducers, components, containers) - **4 hour**
1. Develop table (actions, reducers, components, containers) - **3 hour**
1. Refactoring - **1 hour**

Total time to accomplishing test assignment - **10 hours**.
If you feeling that writing tests taking more time that estimated, please don't spend more time and send us everything that is ready!

For additional questions, please don't hesitate to contact with me [k.zgara@seedium.io](mailto:k.zgara@seedium.io) (Kostya Zgara, developer of Seedium)
