module.exports = {
	singleQuote: true, // 禁用单引号
	jsxSingleQuote: false, // 使用单引号
	trailingComma: 'all',
	printWidth: 100,
	semi: true, //行尾是否使用分号，默认为true
	bracketSpacing: true,
	useTabs: true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
	//tabWidth: 2, //一个tab代表几个空格数，默认为80
	jsxBracketSameLine: true, // 启用jsx语法，> 放在末尾
	overrides: [
		{
			files: '.prettierrc',
			options: {
				parser: 'json'
			}
		}
	]
};