const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPricingPlanValue = document.querySelectorAll('.pricing-plan-value');


elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
    elPaymentPeriodRadio.addEventListener('change', function () {
        const period = elPaymentPeriodRadio.value;
        console.log(period);
        if (period === 'annual') {
            elsPricingPlanValue.forEach(function (elPrice){
                elPrice.textContent = elPrice.closest(".pricing-plan").dataset.planAnnual;
            })
        } else {
            elsPricingPlanValue.forEach(function (elPrice){
                elPrice.textContent = elPrice.closest(".pricing-plan").dataset.planMonthly;
            })
        }
    })
})