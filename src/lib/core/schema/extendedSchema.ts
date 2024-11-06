import { z } from 'zod';
import { fugaConfig } from '../../../../fuga.config.js';

const extendedColorObj = fugaConfig['extends']['colors'];

const extendedColor = z.custom<keyof typeof extendedColorObj>((data) => {
	return typeof data === 'string' && data in fugaConfig;
});

export function extendColorsSchema() {
	return extendedColor;
}

const extendSizeObj = fugaConfig['extends']['sizes'];

const extendSize = z.custom<keyof typeof extendSizeObj>((data) => {
	return typeof data === 'string' && data in fugaConfig;
});

export function extendsizesSchema() {
	return extendSize;
}

export const extendedProps = { ...extendSizeObj, ...extendedColorObj };
