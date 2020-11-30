import './DatePicker.css.proxy.js';
/* src/components/DatePicker.svelte generated by Svelte v3.30.0 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	component_subscribe,
	create_component,
	create_slot,
	destroy_component,
	detach,
	element,
	empty,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	toggle_class,
	transition_in,
	transition_out,
	update_slot
} from "../../web_modules/svelte/internal.js";

import Popover from "./Popover.js";
import { contextKey, setup } from "./lib/context.js";
import { createEventDispatcher, setContext, getContext, onDestroy } from "../../web_modules/svelte.js";
import { CalendarStyle } from "../calendar-style.js";
import { createViewContext } from "./view-context.js";
import View from "./view/View.js";
const get_default_slot_changes = dirty => ({ formatted: dirty[0] & /*$formatter*/ 128 });
const get_default_slot_context = ctx => ({ formatted: /*$formatter*/ ctx[7] });

// (135:8) {#if !trigger}
function create_if_block_1(ctx) {
	let button;

	function select_block_type(ctx, dirty) {
		if (/*$choices*/ ctx[3].isDateChosen) return create_if_block_2;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, [-1]);
	let if_block = current_block_type(ctx);

	return {
		c() {
			button = element("button");
			if_block.c();
			attr(button, "class", "calendar-button svelte-gg6y73");
			attr(button, "type", "button");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			if_block.m(button, null);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(button, null);
				}
			}
		},
		d(detaching) {
			if (detaching) detach(button);
			if_block.d();
		}
	};
}

// (139:12) {:else}
function create_else_block(ctx) {
	let t;

	return {
		c() {
			t = text(/*placeholder*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*placeholder*/ 1) set_data(t, /*placeholder*/ ctx[0]);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (137:12) {#if $choices.isDateChosen}
function create_if_block_2(ctx) {
	let t_value = /*$formatter*/ ctx[7].formattedCombined + "";
	let t;

	return {
		c() {
			t = text(t_value);
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$formatter*/ 128 && t_value !== (t_value = /*$formatter*/ ctx[7].formattedCombined + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (134:35)          
function fallback_block(ctx) {
	let if_block_anchor;
	let if_block = !/*trigger*/ ctx[1] && create_if_block_1(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (!/*trigger*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (133:4) <div slot="trigger">
function create_trigger_slot(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[34].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[42], get_default_slot_context);
	const default_slot_or_fallback = default_slot || fallback_block(ctx);

	return {
		c() {
			div = element("div");
			if (default_slot_or_fallback) default_slot_or_fallback.c();
			attr(div, "slot", "trigger");
			attr(div, "class", "svelte-gg6y73");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[0] & /*$formatter*/ 128 | dirty[1] & /*$$scope*/ 2048) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[42], dirty, get_default_slot_changes, get_default_slot_context);
				}
			} else {
				if (default_slot_or_fallback && default_slot_or_fallback.p && dirty[0] & /*$formatter, $choices, placeholder, trigger*/ 139) {
					default_slot_or_fallback.p(ctx, dirty);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot_or_fallback, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot_or_fallback, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
		}
	};
}

// (153:6) {#if config.isRangePicker}
function create_if_block(ctx) {
	let view;
	let current;

	view = new View({
			props: { viewContextKey: /*endContextKey*/ ctx[9] }
		});

	view.$on("date-chosen", /*date_chosen_handler_1*/ ctx[38]);
	view.$on("time-chosen", /*time_chosen_handler_1*/ ctx[39]);
	view.$on("close", /*close_handler_1*/ ctx[40]);

	return {
		c() {
			create_component(view.$$.fragment);
		},
		m(target, anchor) {
			mount_component(view, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(view.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(view.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(view, detaching);
		}
	};
}

// (146:4) <div class="contents" slot="contents" class:is-range-picker={config.isRangePicker}>
function create_contents_slot(ctx) {
	let div;
	let view;
	let t;
	let current;

	view = new View({
			props: {
				viewContextKey: /*startContextKey*/ ctx[8]
			}
		});

	view.$on("date-chosen", /*date_chosen_handler*/ ctx[35]);
	view.$on("time-chosen", /*time_chosen_handler*/ ctx[36]);
	view.$on("close", /*close_handler*/ ctx[37]);
	let if_block = /*config*/ ctx[10].isRangePicker && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			create_component(view.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			attr(div, "class", "contents svelte-gg6y73");
			attr(div, "slot", "contents");
			toggle_class(div, "is-range-picker", /*config*/ ctx[10].isRangePicker);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(view, div, null);
			append(div, t);
			if (if_block) if_block.m(div, null);
			current = true;
		},
		p(ctx, dirty) {
			if (/*config*/ ctx[10].isRangePicker) if_block.p(ctx, dirty);

			if (dirty[0] & /*config*/ 1024) {
				toggle_class(div, "is-range-picker", /*config*/ ctx[10].isRangePicker);
			}
		},
		i(local) {
			if (current) return;
			transition_in(view.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(view.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(view);
			if (if_block) if_block.d();
		}
	};
}

// (128:2) <Popover     {trigger}     bind:this={popover}     on:opened={initialisePicker}     on:closed={registerClose}>
function create_default_slot(ctx) {
	let t;
	let current;

	return {
		c() {
			t = space();
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let popover_1;
	let div_style_value;
	let current;

	let popover_1_props = {
		trigger: /*trigger*/ ctx[1],
		$$slots: {
			default: [create_default_slot],
			contents: [create_contents_slot],
			trigger: [create_trigger_slot]
		},
		$$scope: { ctx }
	};

	popover_1 = new Popover({ props: popover_1_props });
	/*popover_1_binding*/ ctx[41](popover_1);
	popover_1.$on("opened", /*initialisePicker*/ ctx[21]);
	popover_1.$on("closed", /*registerClose*/ ctx[20]);

	return {
		c() {
			div = element("div");
			create_component(popover_1.$$.fragment);
			attr(div, "class", "datepicker svelte-gg6y73");
			attr(div, "style", div_style_value = /*styling*/ ctx[2].toWrapperStyle());
			toggle_class(div, "open", /*$isOpen*/ ctx[5]);
			toggle_class(div, "closing", /*$isClosing*/ ctx[6]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(popover_1, div, null);
			current = true;
		},
		p(ctx, dirty) {
			const popover_1_changes = {};
			if (dirty[0] & /*trigger*/ 2) popover_1_changes.trigger = /*trigger*/ ctx[1];

			if (dirty[0] & /*popover, $formatter, $choices, placeholder, trigger*/ 155 | dirty[1] & /*$$scope*/ 2048) {
				popover_1_changes.$$scope = { dirty, ctx };
			}

			popover_1.$set(popover_1_changes);

			if (!current || dirty[0] & /*styling*/ 4 && div_style_value !== (div_style_value = /*styling*/ ctx[2].toWrapperStyle())) {
				attr(div, "style", div_style_value);
			}

			if (dirty[0] & /*$isOpen*/ 32) {
				toggle_class(div, "open", /*$isOpen*/ ctx[5]);
			}

			if (dirty[0] & /*$isClosing*/ 64) {
				toggle_class(div, "closing", /*$isClosing*/ ctx[6]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(popover_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(popover_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			/*popover_1_binding*/ ctx[41](null);
			destroy_component(popover_1);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $choices;
	let $selectedStartDate;
	let $isOpen;
	let $isClosing;
	let $formatter;
	let { $$slots: slots = {}, $$scope } = $$props;
	let { range = false } = $$props;
	let { placeholder = "Choose Date" } = $$props;
	let { format = "DD / MM / YYYY" } = $$props;
	let { start = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate()) } = $$props;
	let { end = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()) } = $$props;
	let { dateChosen = false } = $$props;
	let { trigger = null } = $$props;
	let { selectableCallback = null } = $$props;
	let { weekStart = 0 } = $$props;
	let { styling = new CalendarStyle() } = $$props;
	let { selected = range ? [new Date(), new Date()] : [new Date()] } = $$props;
	let { closeOnFocusLoss = true } = $$props;
	let { time = false } = $$props;
	let { morning = 7 } = $$props;
	let { night = 19 } = $$props;
	const dispatch = createEventDispatcher();
	const startContextKey = {};
	const endContextKey = {};

	const config = {
		start,
		end,
		isRangePicker: range,
		isTimePicker: time,
		closeOnFocusLoss,
		format,
		morning,
		night,
		selectableCallback,
		weekStart
	};

	setContext(contextKey, setup(selected, config));
	const { selectedStartDate, selectedEndDate, isOpen, isClosing, highlighted, formatter, choices, months, pickStartDate, pickEndDate, pickStartTime, pickEndTime, destroy } = getContext(contextKey);
	component_subscribe($$self, selectedStartDate, value => $$invalidate(43, $selectedStartDate = value));
	component_subscribe($$self, isOpen, value => $$invalidate(5, $isOpen = value));
	component_subscribe($$self, isClosing, value => $$invalidate(6, $isClosing = value));
	component_subscribe($$self, formatter, value => $$invalidate(7, $formatter = value));
	component_subscribe($$self, choices, value => $$invalidate(3, $choices = value));
	setContext(startContextKey, createViewContext(true, selectedStartDate, months, config));
	setContext(endContextKey, createViewContext(false, selectedEndDate, months, config));
	let popover;

	function registerClose() {
		dispatch("close");
	}

	function initialisePicker() {
		highlighted.set(new Date($selectedStartDate));
		dispatch("open");
	}

	onDestroy(destroy);
	const date_chosen_handler = () => pickStartDate();
	const time_chosen_handler = () => pickStartTime();
	const close_handler = () => popover.close();
	const date_chosen_handler_1 = () => pickEndDate();
	const time_chosen_handler_1 = () => pickEndTime();
	const close_handler_1 = () => popover.close();

	function popover_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			popover = $$value;
			$$invalidate(4, popover);
		});
	}

	$$self.$$set = $$props => {
		if ("range" in $$props) $$invalidate(23, range = $$props.range);
		if ("placeholder" in $$props) $$invalidate(0, placeholder = $$props.placeholder);
		if ("format" in $$props) $$invalidate(24, format = $$props.format);
		if ("start" in $$props) $$invalidate(25, start = $$props.start);
		if ("end" in $$props) $$invalidate(26, end = $$props.end);
		if ("dateChosen" in $$props) $$invalidate(22, dateChosen = $$props.dateChosen);
		if ("trigger" in $$props) $$invalidate(1, trigger = $$props.trigger);
		if ("selectableCallback" in $$props) $$invalidate(27, selectableCallback = $$props.selectableCallback);
		if ("weekStart" in $$props) $$invalidate(28, weekStart = $$props.weekStart);
		if ("styling" in $$props) $$invalidate(2, styling = $$props.styling);
		if ("selected" in $$props) $$invalidate(29, selected = $$props.selected);
		if ("closeOnFocusLoss" in $$props) $$invalidate(30, closeOnFocusLoss = $$props.closeOnFocusLoss);
		if ("time" in $$props) $$invalidate(31, time = $$props.time);
		if ("morning" in $$props) $$invalidate(32, morning = $$props.morning);
		if ("night" in $$props) $$invalidate(33, night = $$props.night);
		if ("$$scope" in $$props) $$invalidate(42, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*$choices*/ 8) {
			$: $$invalidate(22, dateChosen = $choices.isDateChosen);
		}
	};

	return [
		placeholder,
		trigger,
		styling,
		$choices,
		popover,
		$isOpen,
		$isClosing,
		$formatter,
		startContextKey,
		endContextKey,
		config,
		selectedStartDate,
		isOpen,
		isClosing,
		formatter,
		choices,
		pickStartDate,
		pickEndDate,
		pickStartTime,
		pickEndTime,
		registerClose,
		initialisePicker,
		dateChosen,
		range,
		format,
		start,
		end,
		selectableCallback,
		weekStart,
		selected,
		closeOnFocusLoss,
		time,
		morning,
		night,
		slots,
		date_chosen_handler,
		time_chosen_handler,
		close_handler,
		date_chosen_handler_1,
		time_chosen_handler_1,
		close_handler_1,
		popover_1_binding,
		$$scope
	];
}

class DatePicker extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				range: 23,
				placeholder: 0,
				format: 24,
				start: 25,
				end: 26,
				dateChosen: 22,
				trigger: 1,
				selectableCallback: 27,
				weekStart: 28,
				styling: 2,
				selected: 29,
				closeOnFocusLoss: 30,
				time: 31,
				morning: 32,
				night: 33
			},
			[-1, -1]
		);
	}
}

export default DatePicker;