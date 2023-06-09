<template>
  <div>
    <CategoryItems title="Anime">
      <div class="sm:mx-20 flex justify-center items-center py-10">
        <div class="w-full hidden sm:block">
          <p>
            Anime follows a seasonal release format, organized into distinct
            periods called seasons. In Japan, anime is released quarterly, with
            each season lasting about three months and following a consistent
            schedule.
          </p>
        </div>
        <div class="w-full flex justify-center sm:justify-end">
          <div>
            <h2 class="text-2xl mx-auto text-center font-bold mb-4">
              Anime Seasons
            </h2>
            <div class="rounded-2xl mx-auto w-fit">
              <table
                class="w-full border border-stone-900 rounded-2xl overflow-hidden"
              >
                <thead class="bg-zinc-600 text-white rounded-2xl">
                  <tr>
                    <th class="py-2">Season</th>
                    <th class="py-2">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 px-4 border-stone-700">Winter Season</td>
                    <td class="py-2 px-4 border-stone-700">January to March</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-stone-700">Spring Season</td>
                    <td class="py-2 px-4 border-stone-700">April to June</td>
                  </tr>
                  <tr class="font-bold">
                    <td class="py-2 px-4 border-stone-700">Summer Season</td>
                    <td class="py-2 px-4 border-stone-700">
                      July to September
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-stone-700">Fall Season</td>
                    <td class="py-2 px-4 border-stone-700">
                      October to December
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </CategoryItems>
  </div>
</template>
