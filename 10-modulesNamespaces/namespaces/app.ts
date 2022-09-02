/// <reference path= "models/dragDropInterfaces.ts" />
/// <reference path= "models/types.ts" />
/// <reference path= "state/projectState.ts" />
/// <reference path= "util/validation.ts" />
/// <reference path= "decorators/autobinder.ts" />
/// <reference path= "components/baseComponent.ts" />
/// <reference path= "components/projectInput.ts" />
/// <reference path= "components/projectItem.ts" />
/// <reference path= "components/projectList.ts" />

namespace App {

export const state = ProjectState.getInstance();

new ProjectInput()

new ProjectList('active')

new ProjectList('finished')
}
