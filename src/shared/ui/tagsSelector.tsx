import { Badge } from '../cn/components/ui/badge';
import { cn } from '../cn/lib/utils';
import { ISelectOption } from './customSelect';

export interface ITagsSelectorProps {
  tags: ISelectOption[];
  selectedTags: ISelectOption[];
  onChange: (tags: ISelectOption[]) => void;
  includeAllTag?: boolean;
  allTagLabel?: string;
  itemClassName?: string;
}

const TagsSelector = ({
  tags,
  selectedTags,
  onChange,
  includeAllTag,
  allTagLabel = 'Все',
  itemClassName,
}: ITagsSelectorProps) => {
  const isAllSelected = selectedTags.length === tags.length;
  const itemCN = cn(
    'cursor-pointer shadow-2xs text-xs md:text-sm px-3',
    itemClassName
  );

  function handleClick(tag: ISelectOption) {
    if (hasTagInList(tag)) {
      onChange(selectedTags.filter((data) => data.value !== tag.value));
    } else {
      onChange([...selectedTags, tag]);
    }
  }

  function handleAllClick() {
    if (isAllSelected) {
      onChange([]);
    } else {
      onChange(tags);
    }
  }

  function hasTagInList(tag: ISelectOption) {
    return selectedTags.some((data) => data.value === tag.value);
  }

  return (
    <div className='flex gap-1.5 flex-wrap'>
      {includeAllTag && (
        <Badge
          className={itemCN}
          variant={isAllSelected ? 'default' : 'outline'}
          onClick={() => handleAllClick()}
        >
          {allTagLabel}
        </Badge>
      )}
      {tags.map((tag, idx) => (
        <Badge
          key={idx}
          className={itemCN}
          variant={hasTagInList(tag) ? 'default' : 'outline'}
          onClick={() => handleClick(tag)}
        >
          {tag.label}
        </Badge>
      ))}
    </div>
  );
};

export default TagsSelector;
