import type { Snippet } from 'svelte';
import type { BasePropsType, cssPropsType, pseudoType } from './types.js';

type PseudoDict<T extends pseudoType, U> = {
	[K in T]: U;
};

type PseudoUtlity<T> = PseudoDict<pseudoType, T> | T | (string & {});

type WrapperComponentPropsType =
	| (Partial<BasePropsType> &
			Partial<{ children: Snippet }> &
			Partial<PseudoUtlity<Partial<BasePropsType>>>)
	| HTMLElement;

type ComponentPropsType = Partial<BasePropsType> & Record<string, unknown>;

export type { WrapperComponentPropsType, cssPropsType, ComponentPropsType };
