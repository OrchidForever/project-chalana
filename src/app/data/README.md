## Website used to generate data
https://app.json-generator.com/

## Data info used to do so~

```
JG.repeat(7, 10, {
  id: JG.objectId(),
  name: `${JG.firstName()} ${JG.lastName()}`,
  race: JG.random('Kawayanon', 'Iro-Iro', 'Kamikam', 'Laksaman', 'Pilandokan', 'Pak-an'),
  culture: {
    main: 'Gatusan',
    subculture: JG.random('Mantiwan', 'Sagkabanun', 'Noroknon', 'Put\'wanon', 'Gandaranon'),
    bloodline: JG.random('Warrior Lineage', 'Merchant Nobility', 'Tattoo Artists', 'Singers', 'Traveler', 'Sensitives', 'Adopted', 'Tiger-Blooded')
  },
  carriedItems: _.uniq(JG.repeat(3, JG.random('Crafting tools', 'Anvil', 'Bag of trinkets', 'Flowers and herbs for dyes', 'Jade Earrings', 'Pouch of failed inventions', 'Palm leaf scrolls', 'Writing implements', 'Ceremonial staff', 'A piece of the sky', 'Ritual deathrope', 'An adze', 'Flowering staff'))),
  userId: JG.guid(),
  createdAt: JG.date(new Date(2010, 0, 1), new Date(2015, 0, 1)),
  updatedAt() {
    return moment(this.createdAt).add(1, 'days');
  },
});
```
