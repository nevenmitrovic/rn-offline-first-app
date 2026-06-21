import type { FC } from 'react';
import { useGetTasks } from '@/src/api/useTasks';
import { Loader } from '@/src/components/elements/Loader';
import { themeColor } from '@/src/styles/theme';
import dayjs from 'dayjs';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CText } from '../../components/elements/Text';
import { cs } from '../../styles/commonStyles';
import { spacing } from '../../styles/spacing';

const Tasks: FC = () => {
  const { data, isLoading, isFetching } = useGetTasks();

  console.log('Tasks data:', data);

  return (
    <Loader isLoading={isLoading || isFetching}>
      <ScrollView style={cs.flex} contentContainerStyle={styles.contentContainer}>
        <CText type="h1">Tasks</CText>
        <View style={spacing.gap8}>
          {data?.map(task => (
            <View key={task.id} style={styles.taskItem}>
              <View style={spacing.gap8}>
                <CText type="listItemTitle">{task.title}</CText>
                <View style={spacing.gap4}>
                  <CText type="desc">
                    Kreirano: {dayjs(task.createdAt).format('DD.MM.YYYY')}
                  </CText>
                  <CText type="desc">
                    Azurirano: {dayjs(task.updatedAt).format('DD.MM.YYYY')}
                  </CText>
                </View>
              </View>
              <View
                style={[
                  styles.statusIndicator,
                  {
                    backgroundColor: task.completed
                      ? themeColor.success
                      : themeColor.warning,
                  },
                ]}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </Loader>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
    ...spacing.gap16,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 25,
  },
});

export default Tasks;
