const ROLE_ID_DISPATCHER_EDDS = "a6d59de1-1792-4754-9cbb-1f128ab5385d";

let ObjectType = kitGetFormElement("element_TypeOf_Object"),
  SphereGKH = kitGetFormElement("element_SphereGKH"),
  Municipality = kitGetFormElement("element_Municipality");

$scope.$on("formReady", async function () {
  let findRoles = visUser.object.orgRolesOfUser.find(
    (item) => item == ROLE_ID_DISPATCHER_EDDS
  );
  if (findRoles) {
    await $.get("/rest/data/entity/" + visUser.object.Organization.objectId)
      .done((objectData) => {
        Municipality.val(objectData.TerritoryUnit);
      })
      .fail((errorData) => {
        toastr.error(
          "Произошла ошибка при обработке заявления. Пожалуйста, обратитесь в техническую поддержку"
        );
        console.error(errorData);
      });
    Municipality.shade();
  }
});

$scope.$on("formReady", function () {
  ObjectType.hide();
  SphereGKH.hide();
  SphereGKH.val(window.SphereGKH);
});
