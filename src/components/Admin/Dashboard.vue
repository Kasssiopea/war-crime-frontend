<template>
  <div class="admin-panel">
    <div class="filter-panel">
      <!-- Здесь разместите элементы панели фильтра -->
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>PK</th>
            <th>ФАМИЛИЯ</th>
            <th>ИМЯ</th>
            <th>ОТЧЕСТВО</th>
            <th>ВРЕМЯ ПОСЛЕДНЕГО ИЗМЕНЕНИЯ</th>
            <th>СТАТУС ПОСТА</th>
            <th>GET USER GROUP</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredData" :key="item.PK">
            <td>{{ item.PK }}</td>
            <td>{{ item.ФАМИЛИЯ }}</td>
            <td>{{ item.ИМЯ }}</td>
            <td>{{ item.ОТЧЕСТВО }}</td>
            <td>{{ item.ВРЕМЯ_ПОСЛЕДНЕГО_ИЗМЕНЕНИЯ }}</td>
            <td>{{ item.СТАТУС_ПОСТА }}</td>
            <td>{{ item.GET_USER_GROUP }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          PK: 1,
          ФАМИЛИЯ: 'Иванов',
          ИМЯ: 'Иван',
          ОТЧЕСТВО: 'Иванович',
          ВРЕМЯ_ПОСЛЕДНЕГО_ИЗМЕНЕНИЯ: '2023-06-12',
          СТАТУС_ПОСТА: 'Активный',
          GET_USER_GROUP: 'Группа 1'
        },
        {
          PK: 2,
          ФАМИЛИЯ: 'Петров',
          ИМЯ: 'Петр',
          ОТЧЕСТВО: 'Петрович',
          ВРЕМЯ_ПОСЛЕДНЕГО_ИЗМЕНЕНИЯ: '2023-06-10',
          СТАТУС_ПОСТА: 'Неактивный',
          GET_USER_GROUP: 'Группа 2'
        },
        // Добавьте остальные данные сюда
      ],
      filterValue: '',
    };
  },
  computed: {
    filteredData() {
      if (this.filterValue) {
        // Фильтруем данные на основе значения фильтра
        return this.tableData.filter(item => {
          return item.ФАМИЛИЯ.toLowerCase().includes(this.filterValue.toLowerCase());
        });
      } else {
        // Если значение фильтра пустое, возвращаем все данные
        return this.tableData;
      }
    },
  },
};
</script>

<style scoped>
.admin-panel {
  display: flex;
}

.filter-panel {
  width: 200px;
  padding: 10px;
  background-color: #f0f0f0;
}

.table-container {
  flex: 1;
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>