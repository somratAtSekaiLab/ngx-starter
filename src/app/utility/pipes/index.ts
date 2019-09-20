import { EnumConverterPipe } from './enum-converter/enum-converter.pipe';
import { EllipsisPipe } from './ellipsis/ellipsis.pipe';
import { OptionsPipe } from './options/options.pipe';
import { EnumOptionsPipe } from './enum-options/enum-options.pipe';
import { ImagePreviewPipe } from './image-preview/image-preview.pipe';
import { SafeHtmlPipe } from './safe-html/safe-html.pipe';
import { NlToBrPipe } from './nl-to-br/nl-to-br.pipe';
import { SortPipe } from './sort/sort.pipe';
import { FilterPipe } from './filter/filter.pipe';
import { MerediemConverterPipe } from './merediem/merediem-converter.pipe';
import { ToDatePipe } from './to-date/to-date.pipe';

export const pipes: any[] = [
  EnumConverterPipe,
  EllipsisPipe,
  OptionsPipe,
  EnumOptionsPipe,
  ImagePreviewPipe,
  SafeHtmlPipe,
  NlToBrPipe,
  SortPipe,
  FilterPipe,
  MerediemConverterPipe,
  ToDatePipe,
];

export * from './enum-converter/enum-converter.pipe';
export * from './ellipsis/ellipsis.pipe';
export * from './options/options.pipe';
export * from './enum-options/enum-options.pipe';
export * from './image-preview/image-preview.pipe';
export * from './safe-html/safe-html.pipe';
export * from './nl-to-br/nl-to-br.pipe';
export * from './sort/sort.pipe';
export * from './filter/filter.pipe';
export * from './merediem/merediem-converter.pipe';
export * from './to-date/to-date.pipe';
