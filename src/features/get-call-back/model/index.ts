import { useModal, useModalSlot } from 'vue-final-modal'
import { getModalComponent } from '~/src/shared/ui/modal/get-modal-component'

export function openGetCallBackModal() {
	const { open, close } = useModal({
		component: getModalComponent(),
		attrs: {
			title: 'Заказать звонок',
		},
		slots: {
			default: useModalSlot({
				component: defineAsyncComponent(() => import('../ui/GetCallBackForm.vue')),
				attrs: {
					onSuccess: () => {
						close()
						openSuccessModal()
					},
				},
			}),
		},
	})

	open()
}

function openSuccessModal() {
	const { open, close } = useModal({
		component: getModalComponent(),
		attrs: {
			title: 'Заявка принята',
		},
		slots: {
			default: useModalSlot({
				component: defineAsyncComponent(() => import('../ui/SuccessText.vue')),
				attrs: {
					onClick: () => close(),
				},
			}),
		},
	})

	open()
}
