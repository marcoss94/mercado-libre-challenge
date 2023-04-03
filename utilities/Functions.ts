interface HasCategoryId {
  category_id: string;
}

export const Functions = {
  getMostFrequentCategoryId<T extends HasCategoryId>(data: T[]): string | null {
    const categoryIdFrequency = new Map<string, number>();
    for (const item of data) {
      if (categoryIdFrequency.has(item.category_id)) {
        categoryIdFrequency.set(
          item.category_id,
          categoryIdFrequency.get(item.category_id)! + 1
        );
      } else {
        categoryIdFrequency.set(item.category_id, 1);
      }
    }

    let mostFrequentCategoryId: string | null = null;
    let maxFrequency = 0;

    for (const [categoryId, frequency] of Array.from(
      categoryIdFrequency.entries()
    )) {
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mostFrequentCategoryId = categoryId;
      }
    }

    return mostFrequentCategoryId;
  },
  formatNumber(number: number) {
    const format = new Intl.NumberFormat("es-ES", {
      style: "decimal",
      maximumFractionDigits: 0,
    });

    return format.format(number);
  },
};
