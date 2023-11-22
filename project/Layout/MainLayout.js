const HomeScreen = () => {
    // Additional logic or state management can be placed here
  
    return (
      <MainLayout>
        <Text>Welcome to the Home Screen</Text>
  
        <ToDoList />
        <ToDoForm />
      </MainLayout>
    );
  };
  
  export default HomeScreen;
  const MainLayout = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
			<Footer />
		</View>
	);
};