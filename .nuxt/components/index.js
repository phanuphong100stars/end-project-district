export { default as Breadcrumbs } from '../../components/Breadcrumbs.vue'
export { default as ActivitiesAddActivityMember } from '../../components/activities/AddActivityMember.vue'
export { default as AccountsCreateAccount } from '../../components/accounts/CreateAccount.vue'
export { default as AccountsStepper } from '../../components/accounts/Stepper.vue'
export { default as BasicAddAlley } from '../../components/basic/AddAlley.vue'
export { default as BasicAddCommunityInfo } from '../../components/basic/AddCommunityInfo.vue'
export { default as BasicAddDistrict } from '../../components/basic/AddDistrict.vue'
export { default as BasicAddRoad } from '../../components/basic/AddRoad.vue'
export { default as BasicAddZone } from '../../components/basic/AddZone.vue'
export { default as CommiteeAddCommitee } from '../../components/commitee/AddCommitee.vue'
export { default as CommunityBoardsAddCommunityBoard } from '../../components/community-boards/AddCommunityBoard.vue'
export { default as HealthCheckAddHealthCheckMember } from '../../components/health-check/AddHealthCheckMember.vue'
export { default as ManageBaseVueAddCommunityInfo } from '../../components/ManageBase.vue/AddCommunityInfo.vue'
export { default as HouseHoldMembersAddMember } from '../../components/house-hold-members/AddMember.vue'
export { default as HouseHoldsAddHeadHouseHold } from '../../components/house-holds/AddHeadHouseHold.vue'
export { default as HouseHoldsCreateHouseHold } from '../../components/house-holds/CreateHouseHold.vue'
export { default as PersonsCreatePersons } from '../../components/persons/CreatePersons.vue'
export { default as PersonsRole } from '../../components/persons/Role.vue'
export { default as RolesCreateForm } from '../../components/roles/CreateForm.vue'
export { default as HouseHoldsAlleyForm } from '../../components/house-holds/alley/AlleyForm.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
